
//==== FUNÇÃO DO BOTÃO PARA TOP DA PÁGINA ====//
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 120) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 800); 
        return false; 
    }); 
});

$(window).on('touchstart',function() {    
  var overlay = document.getElementsByClassName('');
  
});
  
$('').on('touchstart',function(event){
    event.stopPropagation();   
});




