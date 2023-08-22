//declarando as variaveis e constantes
const form = document.getElementById('form');
const saldo = document.getElementById('saldo');
const saque = document.getElementById('saque');
const acerto = document.getElementById('saquerealizado');
const erro = document.getElementById('erro');

// definindo comando do botão e evitando o comando padrão do botão
form.addEventListener('submit', function(e){
	e.preventDefault();

//validando a opção sacar o valor s(aldo sendo maior ou igual que saque) Sucesso 
	if(parseInt(saldo.value) >= parseInt(saque.value)){
		acerto.style.display = 'block';
		acerto.innerHTML = "Saque realizado com sucesso ! Seu novo saldo é " + (saldo.value - saque.value);
		saldo.value='';
		saque.value='';
		setTimeout(() => {
			acerto.style.display = 'none';
		},3000);

	} else {
		erro.style.display = 'block';
		setTimeout(() =>{
			erro.style.display = 'none';
		},3000);
	}
})