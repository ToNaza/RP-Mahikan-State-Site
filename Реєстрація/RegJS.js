document.getElementById("open").addEventListener("click", function() {
    document.getElementById("modul").classList.add("open");
});

document.getElementById("close").addEventListener("click", function() {
    document.getElementById("modul").classList.remove("open");
});


    
import apiKey from "./apiKey";

const { telegramToken } = apiKey; // Припускаючи, що у вас є об'єкт з токеном telegramToken

async function sendData(message) {
    const url = `https://api.telegram.org/bot${telegramToken}/sendMessage`;
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: -1002007292915,
                text: message,
                parse_mode: "html"
            })
        });

        return await response.json(); // Повернення результату відповіді, якщо потрібно
    } catch (error) {
        return error;
    }
}

let inp1 = document.querySelector('#Ім`я');
let inp2 = document.querySelector('#Фамілія');
let inp3 = document.querySelector('#ТГ_юзер');
let inp4 = document.querySelector('#Дата_входу');

let message = `id ${Date.now()} \n Name: ${inp1.value} \n Surname: ${inp2.value} \n Username: ${inp3.value} \n Date: ${inp4.value}`;

// Виклик функції sendData зі створеним повідомленням
sendData(message)
    .then(response => {
        console.log('Message sent:', response);
        // Опрацювання успішної відповіді, якщо потрібно
    })
    .catch(error => {
        console.error('Error sending message:', error);
        // Опрацювання помилки, якщо потрібно
    });