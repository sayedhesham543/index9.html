$(document).ready(function()
{ 
    "use strict";
    
    //Nice Scroll//
    
    $("html").niceScroll();

});
//loading screen//

$(window).load(function()
{           
    $(".overlay .sk-cube-grid").fadeOut(1000,                      
    function()
    {
	$ ("body").css("overflow","auto");

        $(this).parent().fadeOut(1000,
        function()
        {
            $(this).remove();
        });                         
    });
});
