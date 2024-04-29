document.getElementById("open").addEventListener("click", function () {
    document.getElementById("modul").classList.add("open");
  });
  
  document.getElementById("close").addEventListener("click", function () {
    document.getElementById("modul").classList.remove("open");
  });
  
  
  async function sendData(message) {
    try {
      return await fetch(`https://api.telegram.org/bot6341044419:AAGoMhCmTOlbQMApMfcZzOgNfdAS36d0XP4/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: -1002007292915,
          text: message
          // parse_mode: "html"
        }),
      })
    } catch (error) {
      return error
    }
  }
  
  let Name = document.querySelector('#Name')
  let Surname = document.querySelector('#Surname')
  let Username = document.querySelector('#Username')
  let entryDate = document.querySelector('#Date ')
  
  let btnsubmit = document.querySelector("#MyForm button")
  
  btnsubmit.addEventListener("click", function (event) {
    event.preventDefault()
  
    let message = `id: ${Date.now()} \n Name: ${Name.value} \n Surname: ${Surname.value} \n Username: ${Username.value} \n entryDate: ${entryDate.value}`
    sendData(message).then(data => data.json()).then(data => console.log(data))
  })
