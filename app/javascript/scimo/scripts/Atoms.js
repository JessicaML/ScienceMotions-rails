import $ from 'jquery';

$(document).ready(function($) {
  var box = $(".eye1");

  if (box && box.offset()) {
    var boxCenter = [
      box.offset().left + box.width() / 3,
      box.offset().top + box.height() / 3
    ];
  }

  if (boxCenter) {
    $(document).mousemove(function(e) { 
      var angle =
        Math.atan2(e.pageX - boxCenter[0], -(e.pageY - boxCenter[1])) *
        (180 / Math.PI);
  
      box.css({ "-webkit-transform": "rotate(" + angle + "deg)" });
      box.css({ "-moz-transform": "rotate(" + angle + "deg)" });
      box.css({ transform: "rotate(" + angle + "deg)" });
    });
  }



  var box2 = $(".eye2");
  if (box2 && box && box.offset() && box2.offset()) {
    var boxCenter = [
      box2.offset().left + box2.width() / 2,
      box.offset().top + box2.height() / 2
    ];
  }

  if (boxCenter) {
    $(document).mousemove(function(e) {
      var angle =
        Math.atan2(e.pageX - boxCenter[0], -(e.pageY - boxCenter[1])) *
        (180 / Math.PI);
  
      box2.css({ "-webkit-transform": "rotate(" + angle + "deg)" });
      box2.css({ "-moz-transform": "rotate(" + angle + "deg)" });
      box2.css({ transform: "rotate(" + angle + "deg)" });
    });
  }


  var card = $(".gurprit");

  $(document).on("mousemove", function(e) {
    var ax = -($(window).innerWidth() / 2 - e.pageX) / 20;
    var ay = ($(window).innerHeight() / 2 - e.pageY) / 10;
    card.attr(
      "style",
      "transform: rotateY(" +
        ax +
        "deg) rotateX(" +
        ay +
        "deg);-webkit-transform: rotateY(" +
        ax +
        "deg) rotateX(" +
        ay +
        "deg);-moz-transform: rotateY(" +
        ax +
        "deg) rotateX(" +
        ay +
        "deg)"
    );
  });
});
