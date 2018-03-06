$(function () {
    $(document).ready(function(){
    $("#hide").click(function(){
    $("p").hide("slow", function(){
     });
   });
});

    $("#show").click(function(){
    $("p").show ("slow", function(){

     });
   });
});