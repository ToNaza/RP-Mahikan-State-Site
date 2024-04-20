document.getElementById("open").addEventListener("click", function() {
    document.getElementById("modul").classList.add("open");
});

document.getElementById("close").addEventListener("click", function() {
    document.getElementById("modul").classList.remove("open");
});


    
function submitForm() {
    const form = document.getElementById('MyForm');
    const formData = new FormData(form);

    // Отримати дані форми у форматі JSON
    const jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    // Відправити дані на сервер за допомогою AJAX-запиту
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '../Професії/GRinfoHTML.html');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Отримано успішну відповідь від сервера
            console.log('Дані успішно відправлено');
            // Тут ви можете додати додаткові дії після успішної обробки даних
        } else {
            console.error('Сталася помилка під час відправлення даних');
        }
    };
    xhr.send(JSON.stringify(jsonData));
}