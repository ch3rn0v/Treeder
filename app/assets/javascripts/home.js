$(function(){


  function build_finish_text(original_params, time, speed, percentage)
  {
   $('#processing-result').css({'text-align' : 'left', 'font-size' : '16px'})
   $('#btn').addClass('repeat-btn').val($('#btn').attr('btnrepeat'))
   
   $('a.view_results').attr('href', original_params + '&speed=' + speed + '&time=' + Timer.seconds + '&percentage=' + percentage)
   return "<div><b>Congratulations!</b></div> <span>You have read <b>" + percentage + "</b>% of the text in <b>"
           + time + "</b> seconds with <b>" + speed
           + "</b> delay</span> " + $('#finish_links').html()
  }

  var rslt = document.getElementById("processing-result")
  var usr_inpt = document.getElementById("user-input")  
  //set dafaults
         rslt.style.visibility="hidden";     
         usr_inpt.style.visibility="visible";     

  var original_params = $('a.view_results').attr('href')

  $("#btn").click(function(){

         var word_wrapper = $('#processing-result').children().first(),
         //Параметры для посылки дальнейшего get-запроса
          speed = $( "#slider" ).slider( "option", "value" );
         //Начинаем отсчитывать время чтения
         //Очищаем всю запущенную анимацию, если есть
         globals.clearThreads()

         if($(this).hasClass('repeat-btn'))
         {
           switch_visibility(usr_inpt, rslt);
           $('#processing-result').css({'text-align' : 'center', 'font-size' : '50px'});
           $(this).removeClass('repeat-btn').val($(this).attr('btnstart'))
         }
         else if($(this).hasClass('stop-btn'))
         { 
          Timer.stop();  
          word_wrapper.html(build_finish_text(original_params, Timer.seconds, speed, globals.percentage));
          $( "#slider" ).slider( "option", "disabled", false );
 
          $(this).removeClass('stop-btn')
        }
        else
        {
         Timer.start();
         $( "#slider" ).slider( "option", "disabled", true );
         word_wrapper.hide()

         var content = $("textarea").remove_spaces().split(" ")
         content.push('\n')
         content_length = content.length

         switch_visibility(usr_inpt, rslt)
         //Change button value and set it to active     
         $(this).val($(this).attr('btnstop')).addClass('stop-btn')
        //удаляем лишние пробелы из текста, и обромляем каждое слово тэгом, чтобы потом 
        //каждый из них можно было отдельно анимировать со своим timeout
        var that = $(this)


        $.each(content, function(i, v){
          //200 мс это задержка между словами, 200 мс это время отображения первого слова из всего текста
         // word_wrapper.delay(200 + (speed * i))
         (function(k, val){
           var th =  window.setTimeout(function () {
             word_wrapper.text(val)
             word_wrapper.fadeIn(0)
             if(val == '\n')
             { 
               Timer.stop();
               word_wrapper.html(build_finish_text(original_params, Timer.seconds, speed, 100));
               that.removeClass('stop-btn');
             }
             globals.percentage = parseInt(((k / content_length) * 100),10);
           },(200+(speed * k)))

           globals.threads.push(th);
           })(i,v)

         var th = window.setTimeout(function() {
           word_wrapper.fadeOut(0);
            },speed)
         globals.threads.push(th)
       })
      }

    })

$( "#slider" ).slider({
  value:140,
  min:100,
  max:200,
  slide: function( event, ui ) {
    $( "#speed_val" ).text(ui.value );
  }
});
$( "#speed_val" ).text(ui.value );
});
