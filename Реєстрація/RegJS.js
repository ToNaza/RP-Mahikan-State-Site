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
  let email = document.querySelector('#email ')
  let entryDate = document.querySelector('#Date ')
  
  let btnsubmit = document.querySelector("#MyForm button")
  
  btnsubmit.addEventListener("click", function (event) {
    event.preventDefault()
  
    let message = ` id: 1.${ Date.now()} \n Ім'я: ${Name.value} \n Фамілія: ${Surname.value} \n Username: ${Username.value} \n Email: ${email.value} \n Дата входа в чат: ${entryDate.value}`
    sendData(message).then(data => data.json()).then(data => console.log(data))
  })

  function checkInputs() {
    // Отримуємо значення полів вводу
    var name = document.getElementById('Name').value;
    var surname = document.getElementById('Surname').value;
    var username = document.getElementById('Username').value;
    var date = document.getElementById('Date').value;
    

    // Перевіряємо, чи всі поля вводу заповнені
    if (name.trim() !== '' && surname.trim() !== '' && username.trim() !== '' && date.trim() !== '') {
        // Активуємо кнопку з типом "submit"
        document.getElementById('okO').disabled = false;
    } else {
        // Деактивуємо кнопку з типом "submit"
        document.getElementById('okO').disabled = true;
    }
}


function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function openPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
  setTimeout(function(){
    popup.classList.add("open"); // Додаємо клас для відкриття вспливаючого вікна
  }, 100);
}

function closePopup() {
  var popup = document.getElementById("popup");
  popup.classList.remove("open"); // Видаляємо клас для відкриття вспливаючого вікна
  setTimeout(function(){
    popup.style.display = "none";
  }, 500); // Після закриття вікна, ховаємо його через 0.5 секунди
}

