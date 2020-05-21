

    $(document).ready(function(){

    $('#textinput').on("keyup", function() {
        var textinput = $('#textinput').val();
    var finaltext = "";
    for (i=0; i < textinput.length; i++) {
        finaltext += i % 2 == 0 ? textinput.charAt(i).toLowerCase() : textinput.charAt(i).toUpperCase();
    }
    $('#textoutput').val(finaltext);

      });


      $('#textinput').on('keypress',function(e) {
        if(e.which == 13) {
            var copyText = document.getElementById("textoutput");
            copyText.select();
            copyText.setSelectionRange(0, 99999); 
            document.execCommand("copy");
            $('#copybtn').tooltip('show');
            setTimeout(() => {
                $('#copybtn').tooltip('hide');
            }, 1000);
        }
    });

    $('#copybtn').on('click',function() {
        
            var copyText = document.getElementById("textoutput");
            copyText.select();
            copyText.setSelectionRange(0, 99999); 
            document.execCommand("copy");
      });
    
    $('[data-toggle="tooltip"]').tooltip({
        trigger : 'hover'
    })  
  



    });