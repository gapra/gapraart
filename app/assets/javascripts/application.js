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
	});
});