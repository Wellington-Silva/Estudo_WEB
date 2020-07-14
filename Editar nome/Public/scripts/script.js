let bem_vindo = window.alert('Bem vindo!')

function tranformName() {
	let nome = document.getElementById('nome').value
	let result = document.getElementById('res').innerHTML = nome.toUpperCase()
}

function tranformUpper() {
	let nome = document.getElementById('nome').value
	let result = document.getElementById('res').innerHTML = nome.toUpperCase()
}

function tranformLower() {
	let nome = document.getElementById('nome').value
	let result = document.getElementById('res').innerHTML = nome.toLowerCase()
}
