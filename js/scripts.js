$(document).ready(function(){
  var totalImages = $("#images").children().length; // number of total slideshow images
  var imageCounter = $("#images").children().length; // keeps track of current image
  $("#arrows .fa-angle-left").click(function(){
    var photoNumber = parseInt($("#images .active").attr('class')); // grabs active photo
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

    // alert("image counter is equal to " +imageCounter);

  });
  $("#arrows .fa-angle-right").click(function(){
    var photoNumber = parseInt($("#images .active").attr('class')); // grabs active photo
    $("#circles i").removeClass("fa-circle");
    $("#images img").removeClass("active");
    if (photoNumber < imageCounter) {
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

    // alert("image counter is equal to " +imageCounter);

  });
}); //end of document ready
