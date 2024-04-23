document.getElementById("open").addEventListener("click", function() {
    document.getElementById("modul").classList.add("open");
});

document.getElementById("close").addEventListener("click", function() {
    document.getElementById("modul").classList.remove("open");
});


    
import { '-1002007292915', '6341044419:AAGoMhCmTOlbQMApMfcZzOgNfdAS36d0XP4' } from "./apiKey";

async function sendData(massage) {
    try {
        return await fetch(6341044419:AAGoMhCmTOlbQMApMfcZzOgNfdAS36d0XP4, {
method: 'POST',
headers: {'Content-Type': 'application/json' },
bodt: JSON.stringify({
    chat_id: -1002007292915,
    text: meddage,
    parshe_mode: "html"
})
        })
    } catch (error) {
        return error
    }
}

export default sendData;

let inp1 = document.querySelector('Ім`я')
let inp2 = document.querySelector('Фамілія')
let inp3 = document.querySelector('ТГ юзер')
let inp4 = document.querySelector('Дата входу')

let massage = `id ${Date.now()} \n Name: ${inp1.value} \n Surname: ${inp2.value} \n Username: ${inp3.value} \n Date: ${inp4.value}`