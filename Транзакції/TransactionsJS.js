

async function sendData(message) {
    try {
      return await fetch(`https://api.telegram.org/bot7068731324:AAEld3VpzOWL_z295IetJtUoIrCkLSthmu0/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: -1002080860309,
          text: message
          // parse_mode: "html"
        }),
      })
    } catch (error) {
      return error
    }
  }
  
  let YouID = document.querySelector('#YouID')
  let HimID = document.querySelector('#HimID')
  let Sum = document.querySelector('#Sum')
  
  let btnsubmit = document.querySelector("#RpBankTransactions button")
  
  btnsubmit.addEventListener("click", function (event) {
    event.preventDefault()
  
    let message = `id відправника: ${YouID.value} \nid отримувача: ${HimID.value} \nСума переказу: ${Sum.value} `
    sendData(message).then(data => data.json()).then(data => console.log(data))
  })

  
  document.getElementById("openTransactionsOK").addEventListener("click", function() {
    document.getElementById("TransactionsOK").classList.add("open")
    })
    
    document.getElementById("closeTransactionsOK").addEventListener("click", function() { 
    document.getElementById("TransactionsOK").classList.remove("open")
    }) 



    function checkInputs() {
            // Отримуємо значення полів вводу
            var youID = document.getElementById('YouID').value;
            var himID = document.getElementById('HimID').value;
            var sum = document.getElementById('Sum').value;

            // Перевіряємо, чи всі поля вводу заповнені
            if (youID.trim() !== '' && himID.trim() !== '' && sum.trim() !== '') {
                // Активуємо кнопку з типом "submit"
                document.getElementById('openTransactionsOK').disabled = false;
            } else {
                // Деактивуємо кнопку з типом "submit"
                document.getElementById('openTransactionsOK').disabled = true;
            }
        }