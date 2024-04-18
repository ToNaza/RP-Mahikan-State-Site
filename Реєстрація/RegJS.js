const form = document.getElementById('myForm');
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const scriptURL = 'https://script.google.com/macros/s/AKfycbz_Ao-06saTHRXFzFqBsfKYh6kr-QhzaZNOc5De4Ocegds6CS3w4VoeiM8g373B4_ml/exec';

form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(form);
    fetch(proxyUrl + scriptURL, { 
        method: 'POST', 
        body: formData
    })
    .then(response => {
        if (response.ok) {
            console.log('Message sent successfully!');
            form.reset();
        } else {
            console.error('Failed to send message.');
        }
    })
    .catch(error => console.error('Error sending message:', error));
});



  