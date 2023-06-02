const express = require('express');
const app = express();
const { graphqlHTTP } = require('express-graphql');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const stripe = require('stripe')('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');
const mongoose = require('mongoose');



// Define the GraphQL schema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// Define the root resolver for the GraphQL API
const root = {
  hello: () => 'Hello, World!',
};

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/myapp', { //update 'myapp'
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });

// Define routes and middleware
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.post('/create-payment-intent', async (req, res) => {
  try {
    // Create a Payment Intent with amount 0 (zero dollars)
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 0,
      currency: 'usd',
    });

    // Send the client secret back to the client
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create Payment Intent' });
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

