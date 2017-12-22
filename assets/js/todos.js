//Check OFF SPECIFIC TODOS when clicked
$("ul").on("click","li",function(){
	$(this).toggleClass("completed")	
});

$( "ul" ).on("click","span",function(event) {
  $(this).parent().fadeOut(500,function(){
  	$(this).remove();
  })
  event.stopPropagation();
});
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var newTodo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash-o'></i></span>" + newTodo + "</li>")
	}
});

$(".fa-pencil-square-o").click(function(){
	$("input[type=text]").fadeToggle();
})