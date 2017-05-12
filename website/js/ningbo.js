window.onload = function() {
	var mySwiper = new Swiper('.swiper-container', {
		direction: 'horizontal',
		loop: true,
		slidesPerView: 3,
		spaceBetween: 10,
		autoplay:2000,

		// 如果需要前进后退按钮
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',

	})
}