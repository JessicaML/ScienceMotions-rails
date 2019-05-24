$("#nav-one a")
  .each(function(i) {
    if (i != 0) {
      $("#beep-one")
        .clone()
        .attr("id", "beep-one" + i)
        .appendTo($(this).parent());
    }
    $(this).data("beeper", i);
  })
  .mouseenter(function() {
    $("#beep-one" + $(this).data("beeper"))[0].play();
  });
$("#beep-one").attr("id", "beep-one0");
