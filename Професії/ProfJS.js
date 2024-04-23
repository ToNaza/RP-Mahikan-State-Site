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


                /*Закінчення відправки*/
                /*Початок відправки Ао СБ*/