$(document).ready(function () {
    $(".clickedme").on("keyup", function () {
        $(this).next("label").css("top", "-30px");
    });
    
    
   // Add smooth scrolling to all links
    $(".menu a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
      // Prevent default anchor click behavior
            event.preventDefault();

      // Store hash
            var hash = this.hash;
            $(".menu a").removeClass('active');
            $(this).addClass('active');

            if ($(".for-mobile").hasClass('open')) {
            //alert("has class");
                $(".for-mobile").removeClass('open');
            }
            
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function () {
   
        // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
    
    $(".burger-nav").on('click', function () {
        $(".for-mobile").toggleClass('open');
    });
    
    //Header show on scroll up on mobile
    var $scrolled, $prevScroll = 0;
    
    if (($('header').outerHeight() <= 50) && $('body').outerWidth() <= 768) {
        $(window).scroll(function () {
            $scrolled = document.body.scrollTop || document.documentElement.scrollTop;
            
            if (($scrolled - $prevScroll) < -50) {
                $('header').css("position", "fixed");
            } else if (($scrolled - $prevScroll) > 50) {
                $('header').css("position", "relative");
            }
            
            $prevScroll = $scrolled;
        });
    } else if ($('body').outerWidth() > 768) {
        $('header').css("position", "fixed");
    }
    /*
    $(window).scroll(function () {
        //var $prevscroll, $scrollpos = //$("body").scrollTop();
        
        if ($(this).scrollTop() >= 50) {
            $('#returnToTop').css("display", "block !important").fadeIn(200);
        } else {
            $('#returnToTop').fadeOut(200);
        }
    });
    
    $("#returnToTop").click(function () {
        // Prevent default anchor click behavior
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
    */
    
});