const form = document.getElementById('myForm');
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const scriptURL = 'https://script.google.com/macros/s/AKfycbxACJSo_yxw2VU9w-TQ8GhM5UxRHkX1C_mmee83MOfq1VBI5mhDETsPUXgnFzKAr3Nc/exec';

form.addEventListener('submit', e => {
    e.preventDefault();

    const form = document.forms['submit-to-google-sheet'];


form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(form);
    fetch(scriptURL, { 
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

fetch(scriptURL, { 
  method: 'POST', 
  body: new FormData(form)
})
.then(response => {
  if (response.ok) {
    console.log('Message sent successfully!', response);
  } else {
    console.error('Failed to send message.', response);
  }
})
.catch(error => {
  console.error('Error sending message:', error);
});
})





  