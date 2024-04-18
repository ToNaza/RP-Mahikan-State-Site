const scriptURL = 'https://script.google.com/macros/s/AKfycbz_Ao-06saTHRXFzFqBsfKYh6kr-QhzaZNOc5De4Ocegds6CS3w4VoeiM8g373B4_ml/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })

  const myImage = document.querySelector("img");

  var invocation = new XMLHttpRequest();
  var url = "http://bar.other/resources/credentialed-content/";
  
  function callOtherDomain() {
    if (invocation) {
      invocation.open("GET", url, true);
      invocation.withCredentials = true;
      invocation.onreadystatechange = handler;
      invocation.send();
    }
  }