$(function(){
    
	$("#btn").click(function(){
        //удаляем лишние пробелы из текста, и обромляем каждое слово тэгом, чтобы потом 
        //каждый из них можно было отдельно анимировать со своим timeout
		var content = $("textarea").remove_spaces().split(" ").add_tags("<span class='show_word'>", "</span>")
        var output_block = $("#processing-result")
		output_block.html(content)
        output_block.children().each(function(i){
            $(this).hide()
            $(this).delay(100 * i).fadeIn()
        })
	})

});