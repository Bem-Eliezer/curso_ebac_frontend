$(document).ready(function() {
	$('form').on('submit', function(e) {
		e.preventDefault();

		const novaTarefa = $('#nova-tarefa').val();

		$(document).ready(function() {
		$("ul").append($('<li>').html(novaTarefa));
		
		('click','li',function(){});
		$('#nova-tarefa').val('');
		})
	})
})