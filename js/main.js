$('#telefone').mask('(00) 00000-0000', {
	placeholder: '(DDD) _____-____'
})

$('#CPF').mask('000.000.000 - 00', {
	placeholder: '___.___.___-__'
})

$('#cep').mask('00000-000', { 
	placeholder: '_____-___'
})

$('form').validate({
	rules: {
		nome: {
			required: true
		},
		email: {
			required: true
		},
		telefone: {
			required: true
		},
		CPF: {
			required: true
		},
		cep: {
			required: true
		}
	},
	messages: {
		nome: 'Por favor preencha o campo acima',
		email: 'Por favor preencha o campo acima',
		telefone: 'Por favor preencha o campo acima',
		CPF: 'Por favor preencha o campo acima',
		cep: 'Por favor preencha o campo acima'
	},
	submitHandler: function(form) {
		alert("PARABÉNS !!!! Seu formulario foi enviado com sucesso")
		submit()
	},
	invalidHandler: function(evento,validador) {
		let camposIncorretos = validador.numberOfInvalids();
		if (camposIncorretos) {
			alert(`Existem ${camposIncorretos} campos incorretos`)
		}
	}
})
