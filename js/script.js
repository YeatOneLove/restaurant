$(document).ready(function () {
  $("#owl-example").owlCarousel({
    items: 4,
    slideSpeed: 800,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 4,
      },
    },
  });
});

const subscibeEmail = $("#subscribe-email");
const sendSubmit = (event) => {
  console.log("gi");
  event.preventDefault();

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "valaziz0909@gmail.com",
    Password: "CEDD7E93EA4E5AE394FFBB21FDBF6D590F69",
    To: "valaziz0909@gmail.com",
    From: "valaziz0909@gmail.com",
    Subject: "Subscribe from",
    Body: `Email ${subscibeEmail.value}`,
  }).then((message) => {
    alert(message);
    subscibeEmail.value = "";
  });
};

// Contact us

let contactName = document.getElementById("contact-name");
let contactEmail = document.getElementById("contact-email");
let contactMessage = document.getElementById("contact-message");

const sendContactForm = (e) =>{
e.preventDefault();

Email.send({
    Host: "smtp.elasticemail.com",
    Username: "valaziz0909@gmail.com",
    Password: "CEDD7E93EA4E5AE394FFBB21FDBF6D590F69",
    To: "valaziz0909@gmail.com",
    From: "valaziz0909@gmail.com",
    Subject: "Subscribe from",
    Body: `
    Name: ${contactName.value}
    <br>
    Email: ${contactEmail.value}
    <br>
    Message: ${contactMessage.value}
    `,
  }).then((message) => {
    alert(message);
    contactName.value = "";
    contactEmail.value = "";
    contactMessage.value = "";

  });

};