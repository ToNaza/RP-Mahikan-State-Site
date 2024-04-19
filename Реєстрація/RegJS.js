document.getElementById("open").addEventListener("click", function() {
    document.getElementById("modul").classList.add("open");
});

document.getElementById("close").addEventListener("click", function() {
    document.getElementById("modul").classList.remove("open");
});

function checkPassword() {
    const passwordInput = document.getElementById('passwordInput').value;
    const errorMessageModal = document.getElementById('errorMessageModal');
    const errorMessage = document.getElementById('errorMessage');

    // Перевірка правильності пароля
    if (passwordInput === '22814') {
        // Перенаправлення на іншу сторінку
        window.location.href = '../Громадяни/GRinfoHTML.html';
    } else if (passwordInput === '123456') {
        // Показ картинки на 2 секунди
        showImageForTwoSeconds('https://img2.joyreactor.cc/pics/post/Voices-Of-The-Void-%D0%98%D0%B3%D1%80%D1%8B-Arirals-8342149.png', 200);
    } else if (passwordInput === 'Argemia.pls1724K13B1M84im3') {
        // Показ картинки на 2 секунди
        showImageForTwoSeconds('https://img2.joyreactor.cc/pics/post/Voices-Of-The-Void-%D0%98%D0%B3%D1%80%D1%8B-Arirals-8342149.png', 200);
    } else {
        // Показ повідомлення про помилку
        errorMessage.textContent = 'Неправильний пароль, спробуйте ще раз';
        errorMessageModal.style.display = 'block';
        // Очистка поля вводу пароля
        document.getElementById('passwordInput').value = '';
    }
}

function showImageForTwoSeconds(imageUrl, width) {
    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    imageElement.style.width = width + 'px'; // Задаємо ширину зображення

    document.body.appendChild(imageElement);

    // Затримка показу картинки на 2 секунди перед видаленням
    setTimeout(() => {
        document.body.removeChild(imageElement);
    }, 2000);
}
    
