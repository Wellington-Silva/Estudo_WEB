function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > 2020) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsexo')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            gênero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'ft-bebe-m.png')
            } else if(idade < 21){
                img.setAttribute('src', 'ft-jovem-m.png')
            } else if(idade < 50) {
                img.setAttribute('src', 'ft-adulto-m.png')
            } else {
                img.setAttribute('src', 'ft-idoso-m.png')

            }           
        } else if(fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'ft-bebe-f.png')    
            } else if(idade < 21){
                img.setAttribute('src', 'ft-jovem-f.png')
            } else if(idade < 50) {
                img.setAttribute('src', 'ft-adulto-f.png')
            } else {
                img.setAttribute('src', 'ft-idoso-f.png')    
            }
        }
    }
    //res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
}
