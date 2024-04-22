document.getElementById("openSD").addEventListener("click", function() {
document.getElementById("modSD").classList.add("open")
})

document.getElementById("closeSD").addEventListener("click", function() {
document.getElementById("modSD").classList.remove("open")
})


    document.getElementById("openAoSB").addEventListener("click", function() {
    document.getElementById("modAoSB").classList.add("open")
    })
    
    document.getElementById("closeAoSB").addEventListener("click", function() {
    document.getElementById("modAoSB").classList.remove("open")
    })


        document.getElementById("openGSB").addEventListener("click", function() {
        document.getElementById("modGSB").classList.add("open")
        })
        
        document.getElementById("closeGSB").addEventListener("click", function() {
        document.getElementById("modGSB").classList.remove("open")
        })

        document.addEventListener('DOMContentLoaded', function() {
            var audioPlayer = document.getElementById('audioPlayer');
            var playButton = document.getElementById('playButton');
    
            playButton.addEventListener('click', function() {
                if (audioPlayer.paused) {
                    audioPlayer.play();
                    playButton.textContent = '';
                } else {
                    audioPlayer.pause();
                    audioPlayer.currentTime = 0; // Повернення на початок
                    playButton.textContent = 'Play Sound';
                }
            });
        });


        document.addEventListener('DOMContentLoaded', function() {
            const playButton = document.getElementById('playButton');
            const overlay = document.getElementById('overlay');

            playButton.addEventListener('click', function() {
                // Показуємо overlay зображення
                overlay.style.display = 'flex';

                // Через 1 секунду ховаємо overlay
                setTimeout(function() {
                    overlay.style.display = 'none';
                }, 1000);
            });
        });



            document.getElementById("open_tSD").addEventListener("click", function() {
                document.getElementById("teachingSD").classList.add("open")
                document.getElementById("modSD").classList.remove("open")
                })
               

                document.getElementById("closetSD").addEventListener("click", function() {
                document.getElementById("teachingSD").classList.remove("open")
                })


                /*Відправка в ТГ СД*/ 

                function sendMessage() {
                    const messageInput = document.getElementById('messageInput');
                    const messageText = messageInput.value.trim(); // Получаем текст сообщения из поля ввода
                
                    if (messageText === '') {
                        alert( Громадянин вибирає прохід навчання в категорію Служби Допомоги);
                        return;
                    }
                
                    const botToken = 6341044419:AAGoMhCmTOlbQMApMfcZzOgNfdAS36d0XP4;
                    const chatId = https://t.me/ProfApplication_Bot;
                
                    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
                    const data = {
                        chat_id: chatId,
                        text: messageText
                    };
                
                    const xhr = new XMLHttpRequest();
                    xhr.open('POST', url, true);
                    xhr.setRequestHeader('Content-Type', 'application/json');
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState === XMLHttpRequest.DONE) {
                            if (xhr.status === 200) {
                                alert('Сообщение успешно отправлено в Telegram');
                                messageInput.value = ''; // Очистить поле ввода после отправки
                            } else {
                                alert('Произошла ошибка при отправке сообщения');
                            }
                        }
                    };
                    xhr.send(JSON.stringify(data));
                }

                /*Закінчення відправки*/
                /*Початок відправки Ао СБ*/