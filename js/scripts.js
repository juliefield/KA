$(function() {
    $(window).scroll( function(){
        $('.fadeInBlock').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
            bottom_of_window = bottom_of_window + 400;  
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},500);     
            }
        }); 
    });
});
$('#div_demo').videoBG({
	mp4:'./images/MP4/Working-Space.mp4',
	ogv:'./images/OGV/Working-Space.ogv',
	webm:'./images/WEBM/Working-Space.webm',
	poster:'./images/snapshots/Working-Space.jpg',
	scale:true,
	zIndex:0
});