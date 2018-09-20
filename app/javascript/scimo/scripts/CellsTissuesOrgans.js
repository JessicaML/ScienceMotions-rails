function makeCell() {
    var posx = (Math.random() * ($(".tissue-container").width())).toFixed();
    var posy = (Math.random() * ($(".tissue-container").height())).toFixed();
    $newCell = $("<div class='cell-clone'></div>").clone().css({
        'left': posx + 'px',
        'top': posy + 'px',

    });

    $newCell.appendTo('.tissue-container');
}


function multiplyCell() {
    for (var i = 0; i < 120; i++) {
        setTimeout(function timer() {
            makeCell();
        }, i * 65);
    }
}


setTimeout(multiplyCell, 11000);

$(document).ready(function () {
    $('.organ').hide();
    $('.organ-system').hide();
    var tissue = document.querySelector(".tissue-container");

    tissue.addEventListener("animationend", function () {
        $('.organ').show();
        $('.organ-system').hide().delay(4000).queue(function (n) {
            $(this).show();
        })
    });
});
