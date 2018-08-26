$(document).ready(function()
{ 
    "use strict";
    
    //Nice Scroll//
    
    $("html").niceScroll();
    
    $('.carousel').carousel(
    {
        interval:3000        
    });
    $(".gear-check").click(function()
    {
        $(".coloroption").fadeToggle();    
    });
    //change theme color on click//
    var colorli = $(".coloroption ul li")
    
    $(".coloroption ul li")
    .eq(0).css("backgroundColor","#e41b17").end()
    .eq(1).css("backgroundColor","#E426D5").end()
    .eq(2).css("backgroundColor","#009aff").end()
    .eq(3).css("backgroundColor","#e8b814").end()
    .eq(4).css("backgroundColor","brown").end()
    .eq(5).css("backgroundColor","darkslategrey").end()
    .eq(6).css("backgroundColor","forestgreen");
    
    colorli.click(function()
    {
        $("link[href*='theme']").attr("href",$(this).attr("data-value"));
      // console.log( $(this).attr("data-value") ) //
    });
    //cashing the scroll top element//
    var scrollButton = $("#scroll-top");
    
    $(window).scroll(function()
    {
        
        ( $(this).scrollTop() >= 700 )? scrollButton.show(): scrollButton.hide();
        
    });
    
    //Click On Button To The Scroll Top//
        
    scrollButton.click(function()
    {
        $("html,body").animate({ scrollTop:0}, 600);
    });
    
});
//loading screen//

$(window).load(function()
{           
    $(".overlay .spinner").fadeOut(500,                      
    function()
    {
        $ ("body").css("overflow","auto");
        $(this).parent().fadeOut(500,
        function()
        {
            $(this).remove();
        });                         
    });
});