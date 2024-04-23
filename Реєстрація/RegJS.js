document.getElementById("open").addEventListener("click", function() {
    document.getElementById("modul").classList.add("open");
});

document.getElementById("close").addEventListener("click", function() {
    document.getElementById("modul").classList.remove("open");
});


    
const TOKEN = "6341044419:AAGoMhCmTOlbQMApMfcZzOgNfdAS36d0XP4";
const CHAT_ID = " -1002007292915";
const URI_API = `https://api.telegram.org/bot${ TOKEN }/senMassege`;

document.getElementById('tg').addEventListener('sumbit', function(e) {
    e.preventDefault();

    let message = `<b>Новий Громадянин!</b> \n.`;
    message += `<b>Ім'я-</b> ${this.Name.value} \n`;
    message += `<b>Фамілія-</b> ${this.Surname.value} \n`;
    message += `<b>Username-</b> ${this.Username.value} \n`;
    message += `<b>Дата входу-</b> ${this.entryDate.value} \n`;
    message += `<b>ID-</b> ${Date.now()}`;

   axios.post(URI_API, {
    chat_id: CHAT_ID,
    parse_mode: 'html',
    text: message
   })
})