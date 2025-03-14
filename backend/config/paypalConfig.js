import dotenv from "dotenv";
dotenv.config();

export const paypalConfig = {
    mode: "sandbox", //sandbox or live
    client_id: process.env.PAYPAL_CLIENT_ID,
    client_secret: process.env.PAYPAL_CLIENT_SECRET,
};
