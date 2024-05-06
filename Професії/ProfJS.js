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

                document.getElementById("open_tAoSB").addEventListener("click", function() {
                  document.getElementById("teachingAoSB").classList.add("open")
                  document.getElementById("modAoSB").classList.remove("open")
                  })
                 
  
                  document.getElementById("closetAoSB").addEventListener("click", function() {
                  document.getElementById("teachingAoSB").classList.remove("open")
                  })
  

                  document.getElementById("open_tGSB").addEventListener("click", function() {
                    document.getElementById("teachingGSB").classList.add("open")
                    document.getElementById("modGSB").classList.remove("open")
                    })
                   
    
                    document.getElementById("closetGSB").addEventListener("click", function() {
                    document.getElementById("teachingGSB").classList.remove("open")
                    })



                /*Відправка в ТГ СД*/ 

                async function sendData(message) {
                    try {
                      return await fetch(`https://api.telegram.org/bot6987980384:AAFN9kbgCXlHKzCvwZjZN4nPjrMhMG8CPZg/sendMessage`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                          chat_id: -1002023426230,
                          text: message
                          // parse_mode: "html"
                        }),
                      })
                    } catch (error) {
                      return error
                    }
                  }
                  
                  let id = document.querySelector('#messageInput1')
                 
                  let btnsubmit = document.querySelector("#sentSD")
                  
                 btnsubmit.addEventListener("click", function (event) {
                    event.preventDefault()
                  
                    let message = `id: ${id.value} \nЗапит: Громадянин надіслав  запит на навчання СД`
                    sendData(message).then(data => data.json()).then(data => console.log(data))
                  })

                /*Закінчення відправки*/
                /*Початок відправки Ао СБ*/ 

                async function sendData(message) {
                  try {
                    return await fetch(`https://api.telegram.org/bot6987980384:AAFN9kbgCXlHKzCvwZjZN4nPjrMhMG8CPZg/sendMessage`, {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        chat_id: -1002023426230,
                        text: message
                        // parse_mode: "html"
                      }),
                    })
                  } catch (error) {
                    return error
                  }
                }
                
                let id1 = document.querySelector('#messageInput2')
               
                let btnsubmit1 = document.querySelector("#sentAoSB")
                
               btnsubmit1.addEventListener("click", function (event) {
                  event.preventDefault()
                
                  let message = `id: ${id1.value} \nЗапит: Громадянин надіслав  запит на навчання Ао СБ`
                  sendData(message).then(data => data.json()).then(data => console.log(data))
               })
                   /*Закінчення відправки Ао СБ*/

                   /*початок ГСБ*/ 
                   
                   async function sendData(message) {
                    try {
                      return await fetch(`https://api.telegram.org/bot6987980384:AAFN9kbgCXlHKzCvwZjZN4nPjrMhMG8CPZg/sendMessage`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                          chat_id: -1002023426230,
                          text: message
                          // parse_mode: "html"
                        }),
                      })
                    } catch (error) {
                      return error
                    }
                  }
                  
                  let id2 = document.querySelector('#messageInput3')
                 
                  let btnsubmit2 = document.querySelector("#sentGSB")
                  
                 btnsubmit2.addEventListener("click", function (event) {
                    event.preventDefault()
                  
                    let message = `id: ${id2.value} \nЗапит: Громадянин надіслав  запит на навчання ГСБ`
                    sendData(message).then(data => data.json()).then(data => console.log(data))
                  })

                   /*Закінчення ГСБ*/