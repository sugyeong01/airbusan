// hidemenu
 $(function(){
     $(".ham").on("click", function(){
         $(".menu").css("display", "block");
         $("body").css({
             height: "100vh",
             overflow: "hidden"
         });
     })
     $(".xmark").on("click", function(){
         $(".menu").css("display", "none");
         $("body").css({
             height: "auto",
             overflow: "auto"
         });
     });
    });