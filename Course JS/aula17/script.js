let list = []
let num = document.getElementById('txtn')
let fin = document.getElementById('flista')
let res = document.getElementById('res')

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else 
    return false
}

function adicionar() {
    if(isNumero(num.value) && !inList(num.value, list)) {
        list.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        fin.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou não encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if(list.length == 0) {
        window.alert('Caixa de números vazia, por favor digite um número')
    } else {
        let tot = list.length
        let maior = list[0]
        let menor = list[0]
        let soma = 0
        let media = 0
        for(let pos in list) {
            if(list[pos] > maior) {
                maior = list[pos]
            }
            if(list[pos] < menor) {
                menor = list[pos]
            }
            soma += list[pos]
        }
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} valores cadastrados</p>`
        res.innerHTML += `<p>O maior valor da lista é ${maior}</p>`
        res.innerHTML += `<p>O menor valor da lista é ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores da lista é ${soma}</p>`
        res.innerHTML += `<p>A média da soma dos valores é ${media}</p>`
    }
}
