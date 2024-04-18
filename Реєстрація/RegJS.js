const form = document.getElementById('myForm');
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const scriptURL = 'https://script.google.com/macros/s/AKfycbzIPwR8yhbIwVaDecsU66nwZ_dAjNxHj1TF0TVjYsAislyNsc2L4iU5jyx_p1QhRsI/exec';

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





  