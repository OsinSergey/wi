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

new WOW().init();

var $page = $('html, body');
$('a[href*="#content"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
});

	// Custom JS

});
