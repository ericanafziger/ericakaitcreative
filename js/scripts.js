$(document).ready(function(){
  var totalImages = $("#images").children().length; // number of total slideshow images
  var imageCounter = $("#images").children().length; // keeps track of current image
  $("#arrows .fa-angle-left").click(function(){
    var photoNumber = parseInt($("#images .active").attr('class')); // active photo
    $("#circles i").removeClass("fa-circle");
    $("#images img").removeClass("active");
    if (photoNumber===1) {
      imageCounter = $("#images").children().length;
      $("#images img:nth-child("+imageCounter+")").addClass("active");
    } else {
      imageCounter -= 1;
      $("#images img:nth-child("+imageCounter+")").addClass("active");
    }
    $("#circles i:nth-child("+imageCounter+")").addClass("fa-circle");
  });

  $("#arrows .fa-angle-right").click(function(){
    var photoNumber = parseInt($("#images .active").attr('class')); // active photo
    // debugger;
    $("#circles i").removeClass("fa-circle");
    $("#images img").removeClass("active");
    if (photoNumber < totalImages) {
      imageCounter = photoNumber + 1;
      $("#images img:nth-child("+imageCounter+")").addClass("active");
    } else if (photoNumber === totalImages) {
      imageCounter = 1;
      $("#images img:nth-child("+imageCounter+")").addClass("active");
    } else {
      imageCounter += 1;
      $("#images img:nth-child("+imageCounter+")").addClass("active");
    }
    $("#circles i:nth-child("+imageCounter+")").addClass("fa-circle");
  });
  $("#circles i").click(function(){
    var circleNumber = $(this).attr('class').replace(/[^\d]/g, ""); // clicked circle
    $("#circles i").removeClass("fa-circle");
    $(this).addClass("fa-circle");
    $("#images img").removeClass("active");
    $("#images img:nth-child("+circleNumber+")").addClass("active");
    imageCounter = circleNumber;
  });

}); //end of document ready
