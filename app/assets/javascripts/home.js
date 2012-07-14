$(function(){
  var rslt = document.getElementById("processing-result")
  rslt.style.visibility = 'hidden'
	
	/*$(function restart_scene(){
    var usr_inpt1 = document.getElementById("user-input")
    var rslt1 = document.getElementById("processing-result")
    usr_inpt1.style.visibility = 'visible'
    rslt1.style.visibility = 'hidden'
  })*/
	
	$("#btn").click(function(){
        //удаляем лишние пробелы из текста, и обромляем каждое слово тэгом, чтобы потом 
        //каждый из них можно было отдельно анимировать со своим timeout
		var content = $("textarea").remove_spaces().split(" ").add_tags("<span class='show_word'>", "</span>")
        var output_block = $("#processing-result")
        
        //Прячем всё содержимое, и последовательно отображаем слова с задержкой 100 
		output_block.html(content).children().hide()        
        //Прячем форму ввода текста и показываем блок, где по очереди отображаются слова
        var usr_inpt = document.getElementById("user-input")        
        usr_inpt.style.visibility = 'hidden'
        rslt.style.visibility = 'visible'
        
        output_block.children().each(function(i){
             //180 мс это задержка между словами, 200 мс это время отображения первого слова из всего текста
             $(this).delay(200 + (160 * i)).fadeIn(0)
             $(this).delay(160).fadeOut(0)
        })
                
        //выполняется еще до строки 18
        //usr_inpt.style.visibility = 'visible'
        //rslt.style.visibility = 'hidden'

        //restart_scene();                        
	})
  
  $("#btn_reset").click(function(){
    var usr_inpt = document.getElementById("user-input")
    var rslt = document.getElementById("processing-result")
    usr_inpt.style.visibility = 'visible'
    rslt.style.visibility = 'hidden'
  })

});