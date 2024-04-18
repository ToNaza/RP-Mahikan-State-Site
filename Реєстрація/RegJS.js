const scriptURL = 'https://script.google.com/macros/s/AKfycbx6WZdW5ff90z1MKoUpgXq-o8yKebjAtliuWChuivU/dev'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })

  fetch('https://example.com/api/data', { mode: 'no-cors' })
  .then(response => {
    console.log('Request sent successfully');
  })
  .catch(error => console.error('Error sending request:', error));

  