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
	});

	// tabs
	$('.tab-list').on('click', 'a', function (e) {
		e.preventDefault();

		var dataTab = $(this).attr('data-tab');

		$(this).closest('.tab-container').find('.tab-list a').removeClass('active');
		$(this).addClass('active');
		$(this).closest('.tab-container').find('.tab-content').removeClass('active');
		$('#' + dataTab).addClass('active');
	});


	// slider
	$('.banner-slider').slick({
		fade: true,
		appendArrows: '.banner-slider__arrows',
		dots: true,
		prevArrow: '<span class="prev-arrow"><svg width="16" height="30" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:avocode="https://avocode.com/" viewBox="0 0 16 30"><g><g><path d="M1,15l14,14" fill-opacity="0" fill="currentColor" stroke-linejoin="round" stroke-linecap="round" stroke-opacity="1" stroke="currentColor" stroke-miterlimit="50" stroke-width="2"></path></g><g><path d="M15,1l-14,14" fill-opacity="0" fill="currentColor" stroke-linejoin="round" stroke-linecap="round" stroke-opacity="1" stroke="currentColor" stroke-miterlimit="50" stroke-width="2"></path></g></g></svg></span>',
		nextArrow: '<span class="next-arrow"><svg width="16" height="30" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:avocode="https://avocode.com/" viewBox="0 0 16 30"><g><g><path d="M15,15l-14,-14" fill-opacity="0" fill="currentColor" stroke-linejoin="round" stroke-linecap="round" stroke-opacity="1" stroke="currentColor" stroke-miterlimit="50" stroke-width="2"></path></g><g><path d="M1,29l14,-14" fill-opacity="0" fill="currentColor" stroke-linejoin="round" stroke-linecap="round" stroke-opacity="1" stroke="currentColor" stroke-miterlimit="50" stroke-width="2"></path></g></g></svg></span>'	
	});

	$('.rates-slider').slick({
		slidesToShow: 3,
		variableWidth: true,
		arrows: false,
		infinite: false,
		responsive: [
		{
			breakpoint: 990,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});

	$('.case-slider').slick({
		slidesToShow: 2,
		variableWidth: true,
		infinite: false,
		arrows: false,
		responsive: [
		{
			breakpoint: 990,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});
})