$(function(){
    
	$("#btn").click(function(){
        //удаляем лишние пробелы из текста, и обромляем каждое слово тэгом, чтобы потом 
        //каждый из них можно было отдельно анимировать со своим timeout
		var content = $("textarea").remove_spaces().split(" ").add_tags("<span class='show_word'>", "</span>")
        var output_block = $("#processing-result")
        
        //Прячем всё содержимое, и последовательно отображаем слова с задержкой 100 
		output_block.html(content).children().hide()
        output_block.children().each(function(i){
             //180 мс это задержка между словами, 200 мс это время отображения первого слова из всего текста
             $(this).delay(200 + (180 * i)).fadeIn(0)
             $(this).delay(180).fadeOut(0)
        })
	})

});