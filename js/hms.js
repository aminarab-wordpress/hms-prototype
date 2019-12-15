/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
	$(".navbar").css("top" , "0");  
  } else {
	$(".navbar").css("top" , "-60px");  
    
  }
  prevScrollpos = currentScrollPos;
}

$(function(){
    $(".dropdown").on("show.bs.dropdown hide.bs.dropdown", function(){
      $(this).find(".caret").toggleClass("caretup");
    });
  });