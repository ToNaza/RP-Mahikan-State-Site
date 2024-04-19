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