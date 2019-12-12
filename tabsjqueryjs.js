$(document).ready(function(){

    $('#tab-uno').addClass("active");
    $('#hosting-dos').fadeOut();
    $('#hosting-tres').fadeOut();

    $('#tab-dos').click(function(){
        $('#hosting-uno').fadeOut(10);
        $('#hosting-tres').fadeOut(10);
        $('#hosting-dos').fadeIn(10);
        $('#tab-dos').addClass("active");
        $('#tab-uno').removeClass("active");
        $('#tab-tres').removeClass("active");

})
    $('#tab-tres').click(function(){
        $('#hosting-uno').fadeOut(10);
        $('#hosting-dos').fadeOut(10);
        $('#hosting-tres').fadeIn(10);
        $('#tab-tres').addClass("active");
        $('#tab-dos').removeClass("active");
        $('#tab-uno').removeClass("active");
    
})
    $('#tab-uno').click(function(){
        $('#hosting-dos').fadeOut(10);
        $('#hosting-tres').fadeOut(10);
        $('#hosting-tres').fadeIn(10);
        $('#tab-uno').addClass("active");
        $('#tab-dos').removeClass("active");
        $('#tab-tres').removeClass("active");
})

})