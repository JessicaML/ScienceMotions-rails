$(document).on("mousemove", function(event) {
  $("img.t").css("width", event.pageX + 20);
  $("img.t").css("height", event.pageY);

  $("img.c").css("width", $("#visual").width() - event.pageX);
  $("img.c").css("height", event.pageY);

  $("img.a").css("width", event.pageX);
  $("img.a").css("height", $("#visual").height() - event.pageY);

  $("img.g").css("width", $("#visual").width() - event.pageX);
  $("img.g").css("height", $("#visual").height() - event.pageY);
});
