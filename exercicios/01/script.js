function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');

    var data = new Date();
    var hora = data.getHours();
    //var hora = 15;
    var minutos = data.getMinutes();

    msg.innerHTML = `Agora são ${hora}:${minutos}!`;


    if(hora >= 0 && hora < 12) {
        img.src = 'images/dia.png';
        document.body.style.backgroundColor = '#FECD8C';
    } else if(hora >= 12 && hora < 18) {
        img.src = 'images/tarde.png';
        document.body.style.backgroundColor = '#ABD2F3';
    } else {
        img.src = 'images/noite.png';
        document.body.style.backgroundColor = '#042A7D';
    }
}
