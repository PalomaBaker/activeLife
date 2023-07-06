import React, { useState } from 'react';

const DonationPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [donationAmount, setDonationAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    

    console.log('Donation submitted');
    console.log({
      firstName,
      lastName,
      email,
      donationAmount,
    });

    // Clear form inputs
    setFirstName('');
    setLastName('');
    setEmail('');
    setDonationAmount('');
  };

  return (
    <form id="donation-container" onSubmit={handleSubmit}>
      <div className="donation-box">
        <div className="title">Donation Options</div>
        <div className="form-clear">
          <div className="userInput">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="amount">
            <div className="donationBttn" onClick={() => setDonationAmount('$5')}>
              $5
            </div>
            <div className="donationBttn" onClick={() => setDonationAmount('$10')}>
              $10
            </div>
            <div className="donationBttn" onClick={() => setDonationAmount('$50')}>
              $50
            </div>
            <div className="donationBttn" onClick={() => setDonationAmount('$100')}>
              $100
            </div>
            <div className="donationBttn">
              $<input
                type="text"
                className="custom-amount"
                placeholder=""
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="donate-button">
            Donate Now
          </button>
        </div>
        <p id="demo"></p>
      </div>
    </form>
  );
};

export default DonationPage;
