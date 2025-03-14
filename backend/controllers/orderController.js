import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from 'stripe';
import paypal from "paypal-rest-sdk";
import { paypalConfig } from "../config/paypalConfig.js";

// global variables
const currency = 'aud';
const deliveryCharge = 10;

// gateway initialize
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

//paypal initialize
paypal.configure(paypalConfig);

// Placing orders using COD Method
const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "COD",
            payment: false,
            date: Date.now(),
        };

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId, { cartData: {} });

        res.json({ success: true, message: "Order Placed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Placing orders using Stripe Method
const placeOrderStripe = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;
        const { origin } = req.headers;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "Stripe",
            payment: false,
            date: Date.now(),
        };

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        const line_items = items.map((item) => ({
            price_data: {
                currency: currency,
                product_data: {
                    name: item.name,
                },
                unit_amount: item.price * 100,
            },
            quantity: item.quantity,
        }));

        line_items.push({
            price_data: {
                currency: currency,
                product_data: {
                    name: 'Delivery Charges',
                },
                unit_amount: deliveryCharge * 100,
            },
            quantity: 1,
        });

        const successUrl = `${origin}/verifyStripe?success=true&orderId=${newOrder._id}&userId=${userId}`;
        const cancelUrl = `${origin}/verifyStripe?success=false&orderId=${newOrder._id}`;

        const session = await stripe.checkout.sessions.create({
            success_url: successUrl,
            cancel_url: cancelUrl,
            line_items,
            mode: 'payment',
        });

        res.json({ success: true, session_url: session.url });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};
// Placing orders using PayPal Method
const placeOrderPayPal = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;
        const { origin } = req.headers;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "PayPal",
            payment: false,
            date: Date.now(),
        };

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        const itemList = items.map((item) => ({
            name: item.name,
            sku: item._id, // or a unique sku
            price: (item.price).toFixed(2),
            currency: currency.toUpperCase(),
            quantity: item.quantity,
        }));

        itemList.push({
            name: 'Delivery Charges',
            sku: 'delivery',
            price: deliveryCharge.toFixed(2),
            currency: currency.toUpperCase(),
            quantity: 1,
        });

        // Calculate the total amount
        const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0) + deliveryCharge;

        const create_payment_json = {
            intent: 'sale',
            payer: {
                payment_method: 'paypal'
            },
            redirect_urls: {
                return_url: `${origin}/verifyPayPal?success=true&orderId=${newOrder._id}&userId=${userId}`,
                cancel_url: `${origin}/verifyPayPal?success=false&orderId=${newOrder._id}`
            },
            transactions: [{
                item_list: {
                    items: itemList
                },
                amount: {
                    currency: currency.toUpperCase(),
                    total: totalAmount.toFixed(2)
                },
                description: 'This is the description.'
            }]
        };

        console.log("PayPal Payment Request Payload:", create_payment_json);

        paypal.payment.create(create_payment_json, function (error, payment) {
            if (error) {
                console.log("PayPal Payment Creation Error:", error.response);
                res.json({ success: false, message: error.response.message });
            } else {
                for (let i = 0; i < payment.links.length; i++) {
                    if (payment.links[i].rel === 'approval_url') {
                        res.json({ success: true, redirect_url: payment.links[i].href });
                        return;
                    }
                }
            }
        });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};
// Verify PayPal
const verifyPayPal = async (req, res) => {
    const { orderId, success, userId, paymentId, PayerID } = req.query;

    try {
        if (success === "true" && paymentId && PayerID) {

            const execute_payment_json = {
                payer_id: PayerID,
                transactions: [{
                    amount: {
                        currency: currency.toUpperCase(),
                        total: req.body.amount
                    }
                }]
            };

            paypal.payment.execute(paymentId, execute_payment_json, async function (error, payment) {
                if (error) {
                    console.log(error.response);
                    await orderModel.findByIdAndDelete(orderId);
                    res.json({ success: false });
                } else {
                    await orderModel.findByIdAndUpdate(orderId, { payment: true });
                    await userModel.findByIdAndUpdate(userId, { cartData: {} });
                    res.json({ success: true });
                }
            });
        } else {
            await orderModel.findByIdAndDelete(orderId);
            res.json({ success: false });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Verify Stripe
const verifyStripe = async (req, res) => {
    const { orderId, success, userId } = req.body;

    try {
        if (success === "true") {
            await orderModel.findByIdAndUpdate(orderId, { payment: true });
            await userModel.findByIdAndUpdate(userId, { cartData: {} });
            res.json({ success: true });
        } else {
            await orderModel.findByIdAndDelete(orderId);
            res.json({ success: false });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// All Orders data for Admin Panel
const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({});
        res.json({ success: true, orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// User Order Data For Frontend
const userOrders = async (req, res) => {
    try {
        const { userId } = req.body;

        const orders = await orderModel.find({ userId });
        res.json({ success: true, orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Update order status from Admin Panel
const updateStatus = async (req, res) => {
    try {
        const { orderId, status } = req.body;

        await orderModel.findByIdAndUpdate(orderId, { status });
        res.json({ success: true, message: 'Status Updated' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { placeOrder, placeOrderStripe, placeOrderPayPal, verifyPayPal, verifyStripe, allOrders, userOrders, updateStatus };