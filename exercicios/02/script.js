function verificar() {
    var data = new Date();
    var ano = data.getFullYear();

    var textoAno = document.getElementById('txtano');
    var resultado = document.getElementById('res');

    if(textoAno.value.length == 0) {
        window.alert('[ERRO] - Verifique os dados e tente novamente');
    } else if(textoAno.value < 1903) {
        window.alert('Você é um viajante do tempo?? Tente novamente!');
    } else if(textoAno.value > ano) {
        window.alert('Ah, você é do futuro, certo? Infelizmente não calculo quem não nasceu ainda. Tente novamente!')
    } else {
        var sexo = document.getElementsByName('sexo');
        var idade = ano - Number(textoAno.value);
        var genero = ' ';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if(sexo[0].checked) { 
            genero = 'Homem';
            if(idade >= 0 && idade <= 5) {
                img.setAttribute('src', 'images/bebe-m.png');
            } else if(idade <= 12) {
                img.setAttribute('src', 'images/crianca-m.png');
            } else if(idade <= 20) {
                img.setAttribute('src', 'images/adolescente-m.png');
            } else if(idade <= 35) {
                img.setAttribute('src', 'images/jovem-m.png');
            } else if(idade <= 60) {
                img.setAttribute('src', 'images/adulto-m.png');
            } else {
                img.setAttribute('src', 'images/idoso-m.png');
            }
        } else if(sexo[1].checked) { 
            genero = 'Mulher';
            if(idade >= 0 && idade <= 5) {
                img.setAttribute('src', 'images/bebe-f.png');
            } else if(idade <= 12) {
                img.setAttribute('src', 'images/crianca-f.png');
            } else if(idade <= 20) {
                img.setAttribute('src', 'images/adolescente-f.png');
            } else if(idade <= 35) {
                img.setAttribute('src', 'images/jovem-f.png');
            } else if(idade <= 60) {
                img.setAttribute('src', 'images/adulto-f.png');
            } else {
                img.setAttribute('src', 'images/idoso-f.png');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `${genero}, ${idade} anos.<br>`
        res.appendChild(img);
    }
}