$(document).ready(function(){

    
     $(".hamada").addClass("sliding");
    //chooce elements to animate
    
    var $animation_elements = $('.willAnimate');
var $window = $(window);
   

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
    
   
    //navbar animation

    $(window).scroll(function () {
        if ($(window).scrollTop() > $(".jumbotron").height()) {
            $(".navbar").show("slow");
            
        } else {
            $(".navbar").hide("slow") ; 
           
            
        }
    })
    
    // navbar animation end
    
    
    
    
   


    
    
    
    /*nav start*/
    var active1 = false;
  var active2 = false;
  var active3 = false;
  var active4 = false;

    $('.parent2').on('mousedown touchstart', function() {
    
    if (!active1) $(this).find('.test1').css({'transform': 'translate(0px,125px)'});
    else $(this).find('.test1').css({'transform': 'none'}); 
     if (!active2) $(this).find('.test2').css({ 'transform': 'translate(60px,105px)'});
    else $(this).find('.test2').css({ 'transform': 'none'});
      if (!active3) $(this).find('.test3').css({ 'transform': 'translate(105px,60px)'});
    else $(this).find('.test3').css({'transform': 'none'});
      if (!active4) $(this).find('.test4').css({ 'transform': 'translate(125px,0px)'});
    else $(this).find('.test4').css({ 'transform': 'none'});
    active1 = !active1;
    active2 = !active2;
    active3 = !active3;
    active4 = !active4;
      
    });
    
    /*nav end*/
    
    
   
       
  
    
    
    
    
    

})
