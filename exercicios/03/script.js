function contar() {
    let inicio = document.getElementById('inicio');
    let fim = document.getElementById('fim');
    let passo = document.getElementById('passo');
    let res = document.getElementById('res');
    let soma = inicio.value + fim.value + passo.value;

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.style.textAlign = 'center';
        res.innerHTML = `Impossível contar! Preencha todos os campos.`
    } else {
        res.style.textAlign = 'left';
        res.innerHTML = `Contando:<br>`;
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if(i < f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `;
            }
        } else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `;
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}