// Initialize Stripe with your publishable key
const stripe = Stripe('pk_live_51Hi60hIQnqXSnBBp5HLjbMVx4jD1Bv7IGhbyrkFYekTcHOfSbdhzPHMCVkDWBPdJ2r5S7Kg4vpSpsSdSR1nxomOc00rVVkJcCo');

// Create an instance of Elements
const elements = stripe.elements();

// Create a Card Element
const cardElement = elements.create('card');

// Get the container element to mount the Card Element
const cardContainer = document.getElementById('card-element');

// Mount the Card Element to the container
cardElement.mount(cardContainer);

// Get the payment form and error element
const form = document.getElementById('payment-form');
const errorElement = document.getElementById('error-message');

// Add a submit event listener to the form
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Create a token using the Card Element
  const { token, error } = await stripe.createToken(cardElement);

  if (error) {
    // If there's an error, display the error message to the user
    errorElement.textContent = error.message;
  } else {
    // Send the token to server for further processing
    fetch('/process-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: token.id }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the server response
        console.log(data);
      })
      .catch((error) => {
        // Handle any error that occurred during the request
        console.error(error);
      });
  }
});
