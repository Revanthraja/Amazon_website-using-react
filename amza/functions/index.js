const functions = require("firebase-functions");
const express=require("express");
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const cors= require('cors');
const { request, response } = require("express");

const stripe = require('stripe')('sk_test_51LiJn0SHscVHy4mTHd0j8O1TfJUlmRQhutngVvNITdKAbcT2csTPT9lxhGvGWYkeEGkzoERwztZiSQPjoYsjiIE400XpS48AKx')
//API


//App config
const app=express();
app.use(cors({origin:true}));
app.use(express.json());
app.get('/',(request,response)=>response.status(200).send("Hello world"))

app.post('/payments/create',async(request,response)=>{
    const total=request.query.total;
    console.log("Payment Request Recieved>>",total)
    const paymentIntent=await stripe.paymentIntents.create({
        amount:total,//subunits at the currency
        currency:"usd"
    });
    response.status(201).send({
        clientSecret:paymentIntent.client_secret,

    });
});
//Middlewares
exports.api=functions.https.onRequest(app)


//Listen comand