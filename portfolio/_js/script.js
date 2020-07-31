//===== FUNÇÃO PARA ANIMAR A DIV AO ROLAR A PÁGINA =====//
debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

(function(){
	var $target = $('[data-anime]'),
			animationClass = 'animate',
			offset = $(window).height() * 3/4;

	function animeScroll() {
		var documentTop = $(document).scrollTop();

		$target.each(function(){
			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);
			} else {
				//$(this).removeClass(animationClass);
			}
		});
	}

	animeScroll();

	$(document).scroll(debounce(function(){
		animeScroll();
	}, 50));
})();

// ==== FUNÇAO PARA AUMENTAR E DIMINUIR A NAVBAR QUANDO DESCE E SOBE A PÁGINA ====//
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    $('.navbar').addClass('custom-navbar');
    $('.logo-navbar').addClass('custom-logo');
    document.getElementById("navbarNav").style.fontSize = "19px";
  } else {  
    $('.logo-navbar').removeClass('custom-logo');
    $('.navbar').removeClass('custom-navbar');
    document.getElementById("navbarNav").style.fontSize = "22px";
  }
}

  // ==== FUNÇÃO PARA ANIMAR A ENTRADA E SAÍDA DAS IMAGENS DE SERVIÇOS ====//
$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if(wScroll > $('.animate-services').offset().top - $(window).height()){

    var offset = (Math.min(0, wScroll - $('.animate-services').offset().top +$(window).height() - 350)).toFixed();

    $('.service-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

    $('.service-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

  }
    
  if(wScroll > $('.animate-services').offset().top - $(window).height()){

    var offset = (Math.min(0, wScroll - $('.animate-services').offset().top +$(window).height() - 750)).toFixed();

    $('.service-4').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

    $('.service-5').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

  }
    
  if(wScroll > $('.animate-services').offset().top - $(window).height()){

    var offset = (Math.min(0, wScroll - $('.animate-services').offset().top +$(window).height() - 1250)).toFixed();

    $('.service-6').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

    $('.service-7').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

  }
	
});
   

