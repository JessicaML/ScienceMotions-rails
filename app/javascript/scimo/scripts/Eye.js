import $ from 'jquery';

$(document).scroll(function() {
  // currentoffset = $(this).scrollTop();
  var currentoffset = $(this).scrollTop();

  if (currentoffset < 601) {
    thisoffset = currentoffset - 50 * (currentoffset / 600);
    var scaleclouds = currentoffset / 700 + 1;
    $("#cillary_muscle").css({
      visual: thisoffset,
      transform: "scale(" + scaleclouds + ")"
    });

    var thisoffset = currentoffset - 100 * (currentoffset / 300);
    var thisrotation = -200 * (currentoffset / 1000);
    $("#lens").css({
      visual: thisoffset,
      transform: "rotate(" + thisrotation + "deg)"
    });

    thisoffset = currentoffset - 1000 * (currentoffset / 500);
    $(" #cornea").css({ visual: thisoffset });

    thisoffset = currentoffset - 100 * (currentoffset / 300);
    thisrotation = 250 * (currentoffset / 1000);
    $(" #fovea").css({
      visual: thisoffset,
      transform: "rotate(" + thisrotation + "deg)"
    });

    thisoffset = currentoffset - 100 * (currentoffset / 700);
    var scalebit3 = currentoffset / 300 + 1;

    $(" #conjunctiva").css({
      visual: thisoffset,
      transform: "scale(" + scalebit3 + ")"
    });
  }
});
