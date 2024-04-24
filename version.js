var versionText = 'Preparation for release 3';

function setVersionText() {
    // Отримати елемент <p> для відображення версії
    var versionElement = document.getElementById('versionInfo');

    // Перевірити, чи існує елемент і текст версії визначений
    if (versionElement && versionText) {
        // Встановити текст версії в елемент <p>
        versionElement.textContent = versionText;
    }
}

// Викликати функцію setVersionText() після завантаження сторінки
window.addEventListener('load', setVersionText);



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
    } else if (passwordInput === 'Admit226317') {
        // Відкриття посилання 1
        window.open('https://t.me/+BCo7JhGt_L05YWUy');
    } else if (passwordInput === 'KOS843211') {
        // Відкриття посилання 2
        window.open('https://t.me/+li3tkW0GhFwzOTRi');
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