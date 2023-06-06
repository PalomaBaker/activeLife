const Form = document.querySelector('.form-clear')
const firstName = document.querySelector('[name="firstName"]');
const lastName = document.querySelector('[name="lastName"]');
const email = document.querySelector('[name="email"]');
const donType = document.querySelector('[name="donationAmount"]');
const cusAmount= document.querySelector('[name="custom-amount"]');
const formReset= document.querySelector(".form-clear");

const donationSendEventHandler= async (event) => {
    event.preventDefault();
    console.log('click')

    if (firstName && lastName && email == "") {
        alert("All fields must be filled out");
        return false;
      }else{
       formReset.remove() 
     
      document.getElementById("demo").innerHTML = "Thank you for donating!!";
     
      }
  
    }
      document

        .querySelector('#donation-container')
        .addEventListener('submit', donationSendEventHandler);
