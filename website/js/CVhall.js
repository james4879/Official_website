//var mySwiper = new Swiper('.swiper-container1', {
//	direction: 'horizontal',
//	loop: true,
//	paginationClickable: true,
//	autoplay: 2000,
//	// 如果需要分页器
//	pagination: '.swiper-pagination1',
//
//	onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
//		swiperAnimateCache(swiper); //隐藏动画元素 
//		swiperAnimate(swiper); //初始化完成开始动画
//	},
//	onSlideChangeEnd: function(swiper) {
//		swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
//	}
//})

var mySwiper2 = new Swiper('.swiper-container2', {
	direction: 'vertical',
	loop: true,
	slidesPerView: 3,
	spaceBetween: 20,
	autoplay: 2000,
})