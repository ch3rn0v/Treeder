
     //global variables
     var globals = {
        threads: [],
        clearThreads: function() {
          for(var i = 0; i < this.threads.length; i++)
          {
            window.clearTimeout(this.threads[i]);
          }
        },
        percantage: 0
     };

     var Timer = {
        seconds: 0,
        start: function(){
          this.stop();
          this.seconds = 0;
          var that = this; 
          $('body').everyTime(1000, 'timer', function(i) {
            that.seconds = i
          })
        },
        stop: function(){
            $('body').stopTime('timer');
        }  
     };

     function switch_visibility(el1, el2){
        if(el1.style.visibility == 'visible')
        {
          el1.style.visibility = 'hidden';
          el2.style.visibility = 'visible';
        }
        else if(el1.style.visibility == 'hidden')
        {
          el2.style.visibility = 'hidden';
          el1.style.visibility = 'visible';
        }    
     }

     //remove some character from array
     Array.prototype.clean = function(deleteValue) {
        var newArray = new Array();
     	for (var i = 0; i < this.length; i++) {
     	  if (this[i] != deleteValue) {         
            newArray.push(this[i])
          }	
        }
        return newArray;
    }


    //removes extra spaces from some <textarea>
    //and returns string
    jQuery.fn.remove_spaces = function(){
      return $(this).val().trim().split(" ").clean("").join(" ");
    }

    //covers every element in array with some <tag>
    //and returns array
    Array.prototype.add_tags = function(openTag, closeTag)
    {
     return openTag + this.join(closeTag + openTag + " ") + closeTag;
    }