function tabuada() {
    let number = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(number.value.length == 0) {
        window.alert('Por favor, digite um número')
    } else {
        let n = Number(number.value)
        tab.innerHTML = ''
        for(let c = 1; c <= 10; c++) {
            let item = document.createElement('Option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}
