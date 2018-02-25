// toggle completed class when clicked
$('ul').on('click', 'li', function(){
$(this).toggleClass('complete');
});

// click on X to delete todo item
$('ul').on('click','span', function(event){
	// removes the LI when the X span is clicked
	$(this).parent().fadeOut(500,function(){
		$(this).remove()
	});
	// prevents the event from bubbling up to parent elements
	event.stopPropagation();
});


$('input[type=text]').on('keypress', function(event){
	if(event.which === 13){
		// store input value as newToDo
		let newToDo = $(this).val();
		$(this).val('')
		// writes new todo into the existing UL 
		$('ul').append(`<li><span><i class="fas fa-times"></i></span> ${newToDo}</li>`);
	}
});


$('h1').on('click', function(){
	$('input[type=text]').fadeToggle();
})


