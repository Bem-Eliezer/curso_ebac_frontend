//declarando as variaveis e constantes
const form = document.getElementById('form');
const saldo = document.getElementById('saldo');
const saque = document.getElementById('saque');
const acerto = document.getElementById('saquerealizado');
const erro = document.getElementById('erro');

//estabelecendo a função
function sacarDinheiro(saldo, saque){
	return saldo > saque;
}

// definindo comando do botão e evitando o comando padrão do botão
form.addEventListener('submit', function(e){
	e.preventDefault();

//validando a opção sacar o valor s(aldo sendo maior ou igual que saque) Sucesso 
	let validaForm = sacarDinheiro(saldo.valueasNumber, saque.valueasNumber)
	if(validaForm){
		acerto.style.display = 'block';
		saldo.value='';
		saque.value='';
	
	}
})
// msg erro caso valor saque seja maior que valor saldo 
saque.addEventListener('keyup', function(e) {
	let validaForm = sacarDinheiro(saldo.valueasNumber, saque.valueasNumber)
	if (!validaForm){
		erro.style.display='block';
		acerto.style.display='none';

	}else{
		erro.style.display = 'none';
	}
})