const scriptURL = 'https://script.google.com/macros/s/AKfycbz_Ao-06saTHRXFzFqBsfKYh6kr-QhzaZNOc5De4Ocegds6CS3w4VoeiM8g373B4_ml/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })

  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const apiUrl = 'https://example.com/api/data';
  
  fetch(proxyUrl + apiUrl)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching data:', error));