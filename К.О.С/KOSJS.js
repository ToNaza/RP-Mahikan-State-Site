document.getElementById("openSYD").addEventListener("click", function() {
document.getElementById("modSYD").classList.add("open")
})
    
document.getElementById("closeSYD").addEventListener("click", function() {
document.getElementById("modSYD").classList.remove("open")
})


    document.getElementById("openNav").addEventListener("click", function() {
    document.getElementById("modNav").classList.add("open")
    })
        
    document.getElementById("closeNav").addEventListener("click", function() {
    document.getElementById("modNav").classList.remove("open")
    })





    document.getElementById("open_tSUD").addEventListener("click", function() {
        document.getElementById("teachingSYD").classList.add("open")
        document.getElementById("modSYD").classList.remove("open")
        })
       

        document.getElementById("closettSYD").addEventListener("click", function() {
        document.getElementById("teachingSYD").classList.remove("open")
        })




        document.getElementById("open_tNav").addEventListener("click", function() {
            document.getElementById("teachingNav").classList.add("open")
            document.getElementById("modNav").classList.remove("open")
            })
           
    
            document.getElementById("closettNav").addEventListener("click", function() {
            document.getElementById("teachingNav").classList.remove("open")
            })


             /*початок К.О.С. Судову*/ 
                   
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
              
              let id1 = document.querySelector('#messageInput1')
             
              let btnsubmit1 = document.querySelector("#sentSYD")
              
             btnsubmit1.addEventListener("click", function (event) {
                event.preventDefault()
              
                let message = `id: ${id1.value} \nЗапит: Громадянин надіслав  запит на навчання К.О.С. Судову`
                sendData(message).then(data => data.json()).then(data => console.log(data))
              })

               /*Закінчення К.О.С. Судову*/

               /*початок К.О.С. Освітня*/ 
                   
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
              
              let id2 = document.querySelector('#messageInput2')
             
              let btnsubmit2 = document.querySelector("#sentNav")
              
             btnsubmit2.addEventListener("click", function (event) {
                event.preventDefault()
              
                let message = `id: ${id2.value} \nЗапит: Громадянин надіслав  запит на навчання К.О.С. Освітню`
                sendData(message).then(data => data.json()).then(data => console.log(data))
              })

               /*Закінчення К.О.С. Освітня*/

