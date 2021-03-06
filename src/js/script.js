// import 'jquery';
// import progressScroll from './progressScroll';


$(document).ready( function(){
	$(function() {
		let menuTop = $('.header__navigation').offset().top;
		$(window).scroll(function () {
			if ($(window).scrollTop() > menuTop) {
				if ($('.header__navigation').css('position') != 'fixed') { 
					$('.header__navigation').css('position','fixed');
					$('.header__navigation').css('top','0'); 
					$('.content').css('margin-top','80px'); 
				}
			} else {
				if ($('.header__navigation').css('position') == 'fixed') {
					$('.header__navigation').css('position','');
					$('.header__navigation').css('top','');
					$('.content').css('margin-top','');
					}
				}
			});
	});


	function activeMenu() {
		$('.header__navigation').on('click', () => {
			$('.hamburger').toggleClass('hamburger_active');
			$('.header__menu').toggleClass('header__menu_active');
			setTimeout(() => {
				$('.header__item').toggleClass('header__item_active');
			}, 100);
			});
	}

	$('.header__item').on('click', () => {
		$('.hamburger').toggleClass('hamburger_active');
		$('.header__menu').toggleClass('header__menu_active');
		setTimeout(() => {
			$('.header__item').toggleClass('header__item_active');
		}, 100);
	});

	function scroll(id) {
		$(function(){
			$(`a[href^='${id}']`).click(function(){
					var _href = $(this).attr("href");
					$("html, body").animate({scrollTop: $(_href).offset().top-60+"px"});
					return false;
			});
		});
	}


	$(window).scroll(function() {
		if ($(this).scrollTop() > 1200) {
			$('.scrollUp').fadeIn();
		} else {
			$('.scrollUp').fadeOut();
		}
	}); 
	
	activeMenu();
	scroll('#header');
	scroll('#dushevye');
	scroll('#partitions');
	scroll('#doors');
	scroll('#sliding');
	scroll('#curtains');
	scroll('#interest');
	scroll('#fitings');
	scroll('#footer');
	scroll('#contacts');

	$('.carousel').carousel({
		interval: 5000
	  });



	// progressScroll();

});
