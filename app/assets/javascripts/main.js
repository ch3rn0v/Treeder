
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