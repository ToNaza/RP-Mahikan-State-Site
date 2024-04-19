document.getElementById("open").addEventListener("click", function() {
    document.getElementById("modul").classList.add("open")
    })
    
    document.getElementById("close").addEventListener("click", function() {
    document.getElementById("modul").classList.remove("open")
    })

    function checkPassword() {
        var passwordInput = document.getElementById('passwordInput').value;
    
        if (passwordInput === '22814') {
            // Redirect to another page
            window.location.href = '../Громадяни/GRinfoHTML.html'; // Замініть URL на потрібний
        } else {
            // Display error message and clear password input
            var errorMessageModal = document.getElementById('errorMessageModal');
            var errorMessageText = document.getElementById('errorMessage');
            errorMessageText.textContent = 'Не вірний пароль, спробуйте ще раз';
            errorMessageModal.style.display = 'block';
    
            // Clear password input field
            document.getElementById('passwordInput').value = '';
        }
    }


    function checkPassword() {
        const passwordInput = document.getElementById('passwordInput').value;
        const errorMessageModal = document.getElementById('errorMessageModal');
        const errorMessage = document.getElementById('errorMessage');
    
        // Перевірка правильності пароля (приклад: "123456")
        if (passwordInput === '123456') {
            // Показ картинки на 2 секунди
            showImageForTwoSeconds();
    
        } else {
            // Показ повідомлення про помилку
            errorMessage.textContent = 'Пароль введено неправильно';
            errorMessageModal.style.display = 'block';
        }
    }
    
    function checkPassword() {
        const passwordInput = document.getElementById('passwordInput').value;
        const errorMessageModal = document.getElementById('errorMessageModal');
        const errorMessage = document.getElementById('errorMessage');
    
        // Перевірка правильності пароля (приклад: "123456")
        if (passwordInput === 'Argemia.pls1724K13B1M84im3') {
            // Показ картинки на 2 секунди
            showImageForTwoSeconds();
    
        } else {
            // Показ повідомлення про помилку
            errorMessage.textContent = 'Пароль введено неправильно';
            errorMessageModal.style.display = 'block';
        }
    }
    
    function showImageForTwoSeconds() {
        const imageElement = document.createElement('img');
        imageElement.src = 'https://img2.joyreactor.cc/pics/post/Voices-Of-The-Void-%D0%98%D0%B3%D1%80%D1%8B-Arirals-8342149.png'; // Замініть шлях до зображення
        document.body.appendChild(imageElement);
    
        imageElement.style.width = '200px'; // Задаємо ширину зображення в 200px
        
        document.body.appendChild(imageElement);

        // Затримка показу картинки на 2 секунди перед видаленням
        setTimeout(() => {
            document.body.removeChild(imageElement);
        }, 2000);
    }
    
    function hideErrorMessage() {
        const errorMessageModal = document.getElementById('errorMessageModal');
        errorMessageModal.style.display = 'none';
    }