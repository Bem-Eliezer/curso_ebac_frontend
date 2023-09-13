$(document).ready(function() {
	// verifica se o item da lista esta na classe riscado
	$("#Lista").on("click", "li", function () {
	// condição se ja estiver riscado 
		if($(this).hasClass('riscado')){
			//remove o risco do item 
			$(this).removeClass('riscado');
			return
		}  
		//adiciona risco a um novo item por vez
		$(this).addClass('riscado');
	});
	
	//tirando a funçao padrão do botão 
	$('form').on('submit', function(e) {
		e.preventDefault();
		//criação de constante chamando o id html
		const novaTarefa = $('#nova-tarefa').val();
		//criação e iserção de um novo item da lista 		
		$("ul").append($('<li>').html(novaTarefa));
		//quando apertar o botão limpa o input
		$('#nova-tarefa').val('');	
	})
})