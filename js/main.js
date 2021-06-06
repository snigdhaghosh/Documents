
$(document).ready(function($) {

    //
    // Adds smooth scrolling when clicked on the navigations
    //
    $('.smoothscroll').on('click', function(e){
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
    // Supports responsive feature for the navigation bar
    //
    




    //
    //
    // TODO ? : To highlight the current section in the navigation bar
   


});
