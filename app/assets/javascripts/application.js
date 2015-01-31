// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(function(){
	$(window).on('load ready resize', function(){
		// Welcome
		if($('.welcome').length) {
			var ya = $(window).height(), yb = $('.welcome .board-design').height();
			$('.welcome').css('height', ya);
			$('.board-design').hide();
			$('.board-design').delay('1600').fadeIn().animate({top: -yb});
		}

		// Who am I
		if($('.about').length) {
			// col
			var xcol = $('.about .gp-r > div:first').width();
			//var ycol = xcol/1.65;
			var ycol = $('.about .gp-r > div:first').height();
			$('.about .gp-r > div').css('height', ycol+20);
		}

		// My Works
		if($('.myworks').length) {
			var xli = $('.slide-works-content .work').width()-0.5;
			var x = $('.slide-works-content .work a').width(), y = x/1.52;
			$('.slide-works .slide-works-content .work').each(function (){
				//var x = $('a', this).width(), y = x/1.52;
				$('a', this).css('height', y);
				$('a', this).hover(function(){
					$('img', this).removeClass('grayscale');
				}, function(){
					$('img', this).stop(true).addClass('grayscale');
				});
				$('a').attr('data-effect', 'mfp-3d-unfold');
			});
			// Tabs menu
			$('.tab-menu').each(function(){
				var dur = 400;
				$('li a.all', this).click(function(){
					$('.work a').animate({height: y, width: x, opacity: 1}, dur);
					$('.work a').closest('li').animate({height: y, width: xli, opacity: 1}, dur);
					return(false);
				});
				$('li a.graphic', this).click(function(){
					$('.work a').animate({height: y, width: x, opacity: 1}, dur);
					$('.work a').closest('li').animate({height: y, width: xli, opacity: 1}, dur);
					$('.work a').not($('.graphic')).animate({height: 0, width: 0, opacity: 0}, dur);
					$('.work a').not($('.graphic')).closest('li').animate({height: 0, width: 0, opacity: 0}, dur);
					return(false);
				});
				$('li a.website', this).click(function(){
					$('.work a').animate({height: y, width: x, opacity: 1}, dur);
					$('.work a').closest('li').animate({height: y, width: xli, opacity: 1}, dur);
					$('.work a').not($('.website')).animate({height: 0, width: 0, opacity: 0}, dur);
					$('.work a').not($('.website')).closest('li').animate({height: 0, width: 0, opacity: 0}, dur);
					return(false);
				});
				$('li a.ui', this).click(function(){
					$('.work a').animate({height: y, width: x, opacity: 1}, dur);
					$('.work a').closest('li').animate({height: y, width: xli, opacity: 1}, dur);
					$('.work a').not($('.ui')).animate({height: 0, width: 0, opacity: 0}, dur);
					$('.work a').not($('.ui')).closest('li').animate({height: 0, width: 0, opacity: 0}, dur);
					return(false);
				});
				$('li a.frontend', this).click(function(){
					$('.work a').animate({height: y, width: x, opacity: 1}, dur);
					$('.work a').closest('li').animate({height: y, width: xli, opacity: 1}, dur);
					$('.work a').not($('.frontend')).animate({height: 0, width: 0, opacity: 0}, dur);
					$('.work a').not($('.frontend')).closest('li').animate({height: 0, width: 0, opacity: 0}, dur);
					return(false);
				});
				$('li a.flash', this).click(function(){
					$('.work a').animate({height: y, width: x, opacity: 1}, dur);
					$('.work a').closest('li').animate({height: y, width: xli, opacity: 1}, dur);
					$('.work a').not($('.flash')).animate({height: 0, width: 0, opacity: 0}, dur);
					$('.work a').not($('.flash')).closest('li').animate({height: 0, width: 0, opacity: 0}, dur);
					return(false);
				});
			});
		}
	});

	// Modal my works
	$('.gallery').each(function(){
		$(this).magnificPopup({
			delegate: 'a',
			type: 'image',
			tClose: 'Close (Esc)',
			tLoading: 'Loading.....',
			mainClass:'mfp-with-zoom',
			zoom:{
				enabled: true,
				duration: 400,
				easing: 'ease-in-out'
			},
			gallery: {
				enabled: true, // set to true to enable gallery
				preload: [0,2], // read about this option in next Lazy-loading section
				navigateByImgClick: true,
				arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
				tPrev: 'Previous (Left arrow key)', // title for left button
				tNext: 'Next (Right arrow key)', // title for right button
				tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
			}
		});
	});
	$('.open-work').magnificPopup({
		type: 'inline',
		removalDelay: 500,
		callbacks: {
			beforeOpen: function() {
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		midClick: true
	});
});