const stripe = require('stripe')('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');

const resolvers = {
  Mutation: {
    createPaymentIntent: async () => {
      try {
        // Create a Payment Intent with amount 0 (zero dollars)
        const paymentIntent = await stripe.paymentIntents.create({
          amount: 0,
          currency: 'usd',
        });

        return { clientSecret: paymentIntent.client_secret };
      } catch (error) {
        console.error(error);
        throw new Error('Failed to create Payment Intent');
      }
    },
  },
};

module.exports = resolvers;
