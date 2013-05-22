// Equalise heights of divs where a wrapper where class=equalise
function equalHeight(group) {
    var tallest = 0;
    group.each(function() {

        var thisHeight = $(this).height();

        if(thisHeight > tallest) {
            tallest = thisHeight;
        }
    });

    group.height(tallest);
}

function equalHeightInit() {
    if($(window).width()>375){
        $('.equalise .box a').css("height", "auto");
        equalHeight($(".equalise .box a"));

    } else {
        $('.equalise .box a').css("height", "auto");
    }
}

$(window).load(function(){
     equalHeightInit();
});

$(window).resize(function(){
    equalHeightInit();
});