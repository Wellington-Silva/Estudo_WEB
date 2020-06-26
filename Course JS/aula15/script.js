function contar(){
    let ini = window.document.getElementById('txti')
    let end = window.document.getElementById('txtf')
    let pulo = window.document.getElementById('txtp')
    let res = document.getElementById('result')

    if(ini.value.length == 0 || end.value.length == 0 || pulo.value.length == 0){
        window.alert('[ERROR] Faltam dados!')  
        res.innerHTML = 'Impossível contar!'  
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(end.value)
        let p = Number(pulo.value)
        if(p <= 0) {
            window.alert('Passo inválido, considerando PASSO 1!')
            p = 1
        }
        if(i < f) {
            // Contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449} `
            }
        } else {
            // Contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449} `
            }
        }
    }
    res.innerHTML += ` \u{1F3C1} `
}
