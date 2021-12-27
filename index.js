$(window).on('load',()=>{
    const menu = $("#menu");
    $("#menu-trigger").on('click',()=>{
        menu.slideToggle( 400);
    });
    $(".card").on('click',()=>{
        window.location.href = "recipe.html";
    });
});