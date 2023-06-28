var swiper = new Swiper( '.swiper-container.two', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		effect: 'coverflow',
		loop: true,
		autoplayDisableOnInteraction: false,


		autoplay: 100,
		speed: 800,
		centeredSlides: true,
		slidesPerView: 'auto',
		coverflow: {
			rotate: 0,
			stretch: 100,
			depth: 550,
			modifier: 1,
			slideShadows : false,	
				
		},
		
	   
} );

if(swiper.autoplay.running == false){
	swiper.autoplay.start()	

}
