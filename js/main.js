
$(document).ready(function($) {

  //
  // Adds smooth scrolling when clicked on the navigations
  //
  $('.smoothscroll').click(function(e){
    if(this.hash !== "") {      // check this.has has value
      e.preventDefault();     // to prevent anchor click behaivour
      var hash =  this.hash;
      
      $('html, body').animate({
        'scrollTop': $(hash).offset().top
      }, 800, function() {
        window.location.hash = hash;    //add hash(#) to url after scrolling
      });
    }   // end if
  });

  //
  //
  //
  // Change the background of the navigation bar
  //
  $(window).scroll(function(){
    var currScroll = $(this).scrollTop();
    $('.nav a').each(function(event){
      if(currScroll > $($(this).attr('href')).offset().top - 100){
        $(".header").css("opacity", "1");
        $(".header").css("background-color", "black");
      } else if (currScroll == 0){
        $(".header").css("opacity", "1");
        $(".header").css("background-color", "#00000000");
      } else if(currScroll < 600 && currScroll > 0){
        $(".header").css("opacity", "0");
      }
    });
  });

  //
  //
  //
  // Highlights the current section in the navigation bar
  //
  $(window).scroll(function(e){
    var currSection = $(this).scrollTop();
    // Looping through each nav section
    $('.nav a').each(function(event){
      // Checks the current section and the distance from the top
      if(currSection >= $($(this).attr('href')).offset().top - 100){
        // If not in the current page, then removes '.active' from previous and
        // and adds to the new section.
        $('.nav .active').removeClass('active');
        $(this).addClass('active');
      }
    });
  });

  //
  //
  //
  // TODO: #2 Supports responsive feature for the navigation bar
  // hamburger icon?
  

});