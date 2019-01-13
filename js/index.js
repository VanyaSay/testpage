
(function($) {

	$(document).ready(function($){
   	$('.image-link').magnificPopup({type:'image'});
 });


})(jQuery);
$( ".mobilemenu" ).on( "click", function() {
	$('.header_links').toggleClass( "changed" );
});
$( ".mobilemenu" ).on( "click", function() {
	$(this).toggleClass( "changed_menu" );
	$(this).toggleClass( "mobilemenu" );
});
