$(document).on("mousemove", function(event) {
  $(".dna-img.t").css("width", event.pageX);
  $(".dna-img.t").css("height", event.pageY);

  $(".dna-img.c").css("width", $("#top").width() - event.pageX);
  $(".dna-img.c").css("height", event.pageY);

  $(".dna-img.a").css("width", event.pageX);
  $(".dna-img.a").css("height", $("#top").height() - event.pageY);

  $(".dna-img.g").css("width", event.pageX);
  $(".dna-img.g").css("height", $("#top").height() - event.pageY);
});
