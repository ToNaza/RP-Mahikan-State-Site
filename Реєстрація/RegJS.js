const scriptURL = 'https://script.google.com/macros/s/AKfycbz29ADCinQEKGjWdEGcy2aqtJQk2sEMHUgm1jUv_fGOVzoWI8W3BrylngwiHgwi2Ce5/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })