import React, { useEffect } from 'react';
import './donation.css';
const DonationPage = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('click');

    const firstName = document.querySelector('[name="firstName"]');
    const lastName = document.querySelector('[name="lastName"]');
    const email = document.querySelector('[name="email"]');
    const formReset = document.querySelector('.form-clear');

    if (firstName.value === '' || lastName.value === '' || email.value === '') {
      alert('All fields must be filled out');
      return false;
    } else {
      formReset.remove();
      document.getElementById('demo').innerHTML = 'Thank you for donating!!';
    }
  };

  useEffect(() => {
    const donationContainer = document.querySelector('#donation-container');
    donationContainer.addEventListener('submit', handleSubmit);

    return () => {
      donationContainer.removeEventListener('submit', handleSubmit);
    };
  }, []);

  return (
    <div id="donation-container">
      <div className="donation-box">
        <div className="title">Donation Options</div>
        <form className="form-clear">
          <div className="userInput">
            <input type="text" name="firstName" placeholder="First Name" />
            <input type="text" name="lastName" placeholder="Last Name" />
            <input type="text" name="email" placeholder="Email" />
          </div>

          <div className="amount">
            <div className="donationBttn" id="donationAmount">
              $5
            </div>
            <div className="donationBttn" id="donationAmount">
              $10
            </div>
            <div className="donationBttn" id="donationAmount">
              $50
            </div>
            <div className="donationBttn" id="donationAmount">
              $100
            </div>
            <div className="donationBttn">
              $
              <input
                type="text"
                className="custom-amount"
                name="custom-amount"
                placeholder=""
              />
            </div>
          </div>
          <button type="submit" className="donate-button">
            Donate Now
          </button>
        </form>
      </div>
      <p id="demo"></p>
    </div>
  );
};

export default DonationPage;
