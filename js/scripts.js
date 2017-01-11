$(document).ready(function(){

  // ================Recalculates window height on resize================//
  $(window).resize(function() {
   height();
 });
 function height () {
    var fromBottom = $(document).height()-400-$(window).height();
    return fromBottom
  }
  // ================Scroll Top Blog Post Functionality ================//
    $(window).scroll(function() {

      if ($(document).scrollTop() > 350 && $(document).scrollTop() < height()) {
        $(".top.fixed").fadeIn(300);
      } else {
        $(".top.fixed").fadeOut(300);
      }
    });

  // ================Page Scroll Functionality ================//

  $(".more").click(function() {
      $('html, body').animate({
          scrollTop: $(".section-two").offset().top,
          behavior: 'smooth',
      }, 1000);
  });

  $(".weddings").click(function() {
      $('html, body').animate({
          scrollTop: $("#weddings").offset().top,
          behavior: 'smooth',
      }, 1000);
  });

  $(".portraits").click(function() {
      $('html, body').animate({
          scrollTop: $("#portraits").offset().top,
          behavior: 'smooth',
      }, 1500);
  });

  $(".top").click(function() {
      $('html, body').animate({
          scrollTop: $("#top-of-page").offset().top,
          behavior: 'smooth',
      }, 1000);
  });
  $(".go-home").click(function() {
      $('html, body').animate({
          scrollTop: $("#top-of-page").offset().top,
          behavior: 'smooth',
      }, 1000);
  });

// =========================Hidden Menu==========================//
$(".menu-bars").click(function() {
  $(".nav-line:nth-child(1)").toggleClass("animate-top");
  $(".nav-line:nth-child(2)").toggleClass("animate-middle");
  $(".nav-line:nth-child(3)").toggleClass("animate-bottom");
  $(".menu-bars").toggleClass("shift");
  $(".wrap").toggleClass("pull");
  $(".wrap").toggleClass("fixed");
  $(".side-nav").toggleClass("push");
});

//if window is resized while fly nav is open
$(window).resize(function() {
   width = $(window).width();   // returns width of browser viewport
  if (width > 741) {
    $(".nav-line:nth-child(1)").removeClass("animate-top");
    $(".nav-line:nth-child(2)").removeClass("animate-middle");
    $(".nav-line:nth-child(3)").removeClass("animate-bottom");
    $(".wrap").removeClass("pull");
    $(".menu-bars").removeClass("shift");
    $(".wrap").removeClass("fixed");
    $(".side-nav").removeClass("push");
  }
});


// ================Slideshow Functionality ================//

  var totalImages = $(".images").children().length; // # of total slideshow images
  var imageCounter = $(".images").children().length; // keeps track of current image
  var interval = null;
    function startSlideshow() { interval = setInterval(function() {
    var photoNumber = parseInt($(".images .active").attr('class')); // active photo
    $(".images img").removeClass("active");
    if (photoNumber < totalImages) {
      imageCounter = photoNumber + 1;
      $(".images img:nth-child("+imageCounter+")").addClass("active");
    } else if (photoNumber === totalImages) {
      imageCounter = 1;
      $(".images img:nth-child("+imageCounter+")").addClass("active");
    } else {
      imageCounter += 1;
      $(".images img:nth-child("+imageCounter+")").addClass("active");
    }
    photoNumber += 1;
    $(".circles i").removeClass("fa-circle");
    $(".circles i:nth-child("+imageCounter+")").addClass("fa-circle");
  }, 5000); }

  function stopSlideshow() { clearInterval(interval)}

  startSlideshow();
  $('.left-controll').click(function(){
    debugger;
    stopSlideshow();
    var photoNumber = parseInt($(".images .active").attr('class')); // active photo
    $(".circles i").removeClass("fa-circle");
    $(".images img").removeClass("active");
    if (photoNumber===1) {
      imageCounter = $(".images").children().length;
      $(".images img:nth-child("+imageCounter+")").addClass("active");
    } else {
      imageCounter -= 1;
      $(".images img:nth-child("+imageCounter+")").addClass("active");
    }
    $(".circles i:nth-child("+imageCounter+")").addClass("fa-circle");
    startSlideshow();
  });

  $('.right-controll').click(function(){
    stopSlideshow();
    var photoNumber = parseInt($(".images .active").attr('class')); // active photo
    $(".circles i").removeClass("fa-circle");
    $(".images img").removeClass("active");
    if (photoNumber < totalImages) {
      imageCounter = photoNumber + 1;
      $(".images img:nth-child("+imageCounter+")").addClass("active");
    } else if (photoNumber === totalImages) {
      imageCounter = 1;
      $(".images img:nth-child("+imageCounter+")").addClass("active");
    } else {
      imageCounter += 1;
      $(".images img:nth-child("+imageCounter+")").addClass("active");
    }
    $(".circles i:nth-child("+imageCounter+")").addClass("fa-circle");
    startSlideshow();
  });
  $(".circles i").click(function(){
    stopSlideshow();
    var circleNumber = $(this).attr('class').replace(/[^\d]/g, ""); // clicked circle
    $(".circles i").removeClass("fa-circle");
    $(this).addClass("fa-circle");
    $(".images img").removeClass("active");
    $(".images img:nth-child("+circleNumber+")").addClass("active");
    imageCounter = circleNumber;
    startSlideshow();
  });

}); //end of document ready
