document.getElementById("open").addEventListener("click", function() {
    document.getElementById("modul").classList.add("open");
});

document.getElementById("close").addEventListener("click", function() {
    document.getElementById("modul").classList.remove("open");
});


import { -1002007292915, 6341044419:AAGoMhCmTOlbQMApMfcZzOgNfdAS36d0XP4 } from ".apiKey";

anync function sendData(message) {
try {
return await fetch(6341044419:AAGoMhCmTOlbQMApMfcZzOgNfdAS36d0XP4, {
metod: 'POST',
headers: { 'Content-Tupe': 'application/json' },
body: JSON.stringifly({
chat_id: -1002007292915,
text: message,
parse_mode: "html"
}),
})
} catch (error) {
return error
}
}

export default sendData;

let Name = document.querySelector('Ім`я-')
let Surname = document.querySelector('Фамілія-')
let Username = document.querySelector('Юзернейм-')
let entryDate = document.querySelector('дата приєднання- ')

let message = `id: ${Date.now()} \n Name: ${Name.value} \n Surname: ${Surname.value} \n Username: ${Username.value} \n entryDate: ${entryDate.value}`
