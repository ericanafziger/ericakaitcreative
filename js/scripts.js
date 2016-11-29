$(document).ready(function(){
  var totalImages = $("#images").children().length; // number of total slideshow images
  var imageCounter = $("#images").children().length; // keeps track of current image
  var startofImages = 1;
  $("#arrows .fa-angle-left").click(function(){
    var photo = parseInt($("#images .active").attr('class')); // grabs active photo
    $("#images img").removeClass("active");
    if (photo===1) {
      imageCounter = $("#images").children().length;
      $("#images img:nth-child("+imageCounter+")").addClass("active");
    } else {
      imageCounter -= 1;
      startofImages = imageCounter;
      $("#images img:nth-child("+imageCounter+")").addClass("active");
    }
    // alert("image counter is equal to " +imageCounter);

  });
  $("#arrows .fa-angle-right").click(function(){
    var photo = parseInt($("#images .active").attr('class')); // grabs active photo
    $("#images img").removeClass("active");
    if (photo < imageCounter) {
      imageCounter = photo + 1;
      $("#images img:nth-child("+imageCounter+")").addClass("active");
    } else if (photo === totalImages) {
      imageCounter = 1;
      $("#images img:nth-child("+imageCounter+")").addClass("active");
    } else {
      imageCounter += 1;
      $("#images img:nth-child("+imageCounter+")").addClass("active");
    }
    // alert("image counter is equal to " +imageCounter);

  });
}); //end of document ready
