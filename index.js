$('#right-paddle').click(function () {
    event.preventDefault();
    $('#content').animate({
        scrollLeft: "-=335px"
    }, "slow");
});

$('#left-paddle').click(function () {
    event.preventDefault();
    $('#content').animate({
        scrollLeft: "+=335px"
    }, "slow");
});



