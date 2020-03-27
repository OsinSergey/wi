document.addEventListener("DOMContentLoaded", function() {

let tabsItem = $('.tabs_link');	

tabsItem.on('click', function(e){
	e.preventDefault();
	$('.tabs-active').toggleClass('tabs-active');
	$(this).toggleClass('tabs-active');
	let activContent = $(this).attr('href');
	$('.visible').toggleClass('visible');
	$(activContent).toggleClass('visible');


});

	



	// Custom JS

});
