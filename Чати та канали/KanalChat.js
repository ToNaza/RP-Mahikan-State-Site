function showMessage() {
    const message = document.getElementById('message');
    message.classList.add('show');

    setTimeout(() => {
        message.classList.remove('show');
    }, 2000); // Повідомлення буде видиме протягом 2 секунд
}


function showPopup(id) {
    document.getElementById(id).style.display = 'block';
}

function hidePopup(id) {
    document.getElementById(id).style.display = 'none';
}



