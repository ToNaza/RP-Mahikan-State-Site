function toggleColor(button) {
    var buttons = document.querySelectorAll('button');
    buttons.forEach(function(btn) {
        if (btn !== button) {
            btn.classList.remove('active');
        }
    });
    button.classList.toggle('active');
}


function toggleText(id) {
    var mainKon = document.getElementById('mainKon');
    var mainAdK = document.getElementById('mainAdK');
    var mainKrk = document.getElementById('mainKrk');

    if (id === 'mainKon') {
        mainKon.style.display = 'block';
        mainAdK.style.display = 'none';
        mainKrk.style.display = 'none';
    } else if (id === 'mainAdK') {
        mainKon.style.display = 'none';
        mainAdK.style.display = 'block';
        mainKrk.style.display = 'none';
    } else if (id === 'mainKrk') {
        mainKon.style.display = 'none';
        mainAdK.style.display = 'none';
        mainKrk.style.display = 'block';
    }
}