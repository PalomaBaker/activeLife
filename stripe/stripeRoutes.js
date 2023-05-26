// importing dependencies 
const express = require('express');
const router = express.Router();
const stripe = require('stripe')('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');

//Defining a route to create a payment intent
router.post('/create-payment-intent', async (req, res) => {
    try {
      const { amount, currency } = req.body;
  
      // Create a payment intent
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency,
      });
  
      res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      console.error('Error creating payment intent:', error);
      res.status(500).json({ error: 'Failed to create payment intent' });
    }
  });

  //Defining a route to process payments (called after the user submits payment information)
router.post('/process-payment', async (req, res) => {
    try {
      const { paymentMethodId, paymentIntentId } = req.body;
  
      // Confirm the payment intent
      const paymentIntent = await stripe.paymentIntents.confirm(paymentIntentId, {
        payment_method: paymentMethodId,
      });
  
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error processing payment:', error);
      res.status(500).json({ error: 'Failed to process payment' });
    }
  });

//Defining a route to handle webhook events from Stripe (for asynchronous notifications)
router.post('/webhook', async (req, res) => {
    let event;
  
    try {
      // Verify the signature of the incoming webhook event
      const signature = req.headers['stripe-signature'];
      event = stripe.webhooks.constructEvent(req.body, signature, 'stripe_webhook'); //need webhook key
  
      // Handle specific event types
      if (event.type === 'payment_intent.succeeded') {
        // Handle successful payment intent
        const paymentIntent = event.data.object;
        console.log('Payment intent succeeded:', paymentIntent);
      }
      // Handle other event types...
  
      res.status(200).json({ received: true });
    } catch (error) {
      console.error('Error handling webhook event:', error);
      res.status(400).json({ error: 'Failed to handle webhook event' });
    }
  });
  
//Exporting the router from the file:
  module.exports = router;
