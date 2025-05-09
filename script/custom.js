// hidemenu
$(function(){
    $(".ham").on("click", function(){
        $(".menu").css("display", "block");
    });
    $(".xmark").on("click", function(){
        $(".menu").css("display", "none");
    });
});
