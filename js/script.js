// JavaScript Document
$(document).ready(function(e) {
    console.log($(document).height(),$(window).height());
// we need window height and set the variables
var docHeight= $(document).height();
var winHeight= $(window).height();
// make if statement to tell when browser scrolls to certain point
$( window ).scroll(function() 
{
  	console.log("hello");
  	if ($(window).scrollTop()>37)
	{
		//console.log("scrolling");
		$(".page2Cont .scrollDown").css('visibility', 'visible');
       $(".fauxScroll").hide();
	};
});
//if ($(window).scrollTop()>10){console.log("scrolling")};
//make another class that will replace the current class 
// make current class what it should look like. make another class with fixed position and -460px. then add it on in the beginning.
// set div to correct position by adding and removing classes

});	