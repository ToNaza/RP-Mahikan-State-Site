var versionText = 'Beta';

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