$(document).ready(function () {
	// Dropdown menu
	$('.js-dropdown-link').hover(function () {
		$('body').addClass('menu-visible');
		$(this).addClass('active');
		$(this).find('.dropmenu').addClass('visible');
		console.log(12);
	},function () {
		$('body').removeClass('menu-visible');
		$(this).removeClass('active');
		$(this).find('.dropmenu').removeClass('visible');
	});

	$('.mobile-btn').on('click',function () {
		$('#overlay').addClass('active');
		$('.mobile-menu-block').addClass('active')
	});

	$('.close').on('click',function (e) {
		e.preventDefault();

		$('#overlay').removeClass('active');
		$('.mobile-menu-block').removeClass('active')
	})

	$('.js-slide-submenu-link').on('click',function (e) {
		e.preventDefault();

		$(this).parent().find('.dropmenu').addClass('visible');
		$('#overlay').addClass('active');
	});

	$('.close-dropmenu').on('click',function (e) {
		e.preventDefault();

		$('.dropmenu').removeClass('visible');
	})
})