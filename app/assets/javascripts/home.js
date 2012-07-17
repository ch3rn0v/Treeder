$(function(){
  var rslt = document.getElementById("processing-result")
  var usr_inpt = document.getElementById("user-input")        
  rslt.style.visibility = 'hidden'
  var original_params = $('a.view_results').attr('href')
    
    $("#btn").click(function(){

         //Параметры для дальнейшего get-запроса
         var speed = $( "#slider" ).slider( "option", "value" );
         $('a.view_results').attr('href', original_params + '&speed=' + speed)
         

      globals.clearThreads()

      if($(this).hasClass('active-btn'))
      {
        usr_inpt.style.visibility = 'visible'
        rslt.style.visibility = 'hidden'
        $(this).val($(this).attr('btnstart')).removeClass('active-btn')
      }
      else
      {

        $(this).val($(this).attr('btnstop')).addClass('active-btn')
        //удаляем лишние пробелы из текста, и обромляем каждое слово тэгом, чтобы потом 
        //каждый из них можно было отдельно анимировать со своим timeout
        var content = $("textarea").remove_spaces().split(" ")
        var output_block = $("#processing-result")
                
        //alert(document.getElementById("speed").value)
                
        //Прячем форму ввода текста и показываем блок, где по очереди отображаются слова
        usr_inpt.style.visibility = 'hidden'
        rslt.style.visibility = 'visible'

        var word_wrapper = $('#processing-result').children().first()
        word_wrapper.hide()

        $.each(content, function(i, v){
          //200 мс это задержка между словами, 200 мс это время отображения первого слова из всего текста
         // word_wrapper.delay(200 + (speed * i))
         (function(k, val){
           var th =  window.setTimeout(function () {
             word_wrapper.text(val)
             word_wrapper.fadeIn(0)
             },(200+(speed * k)))

            globals.threads.push(th);
         })(i,v)

          
           var th = window.setTimeout(function() {
            word_wrapper.fadeOut(0)
          },speed )
            globals.threads.push(th)
        })

      }
    })
 
    $( "#slider" ).slider({
      value:140,
      min:100,
      max:200,
      slide: function( event, ui ) {
        $( "#speed" ).text(ui.value );
      }
    });
    $( "#speed" ).text(ui.value );
});