$("#guyhero").hide();
$("#octolings").hide();
$("#text2").hide();

$("#advance2").click(function() {
    $("#text1").hide();
    $("#hero2").hide();
    $("#guyhero").show();
    $("#text2").show();
});
$("#guyhero").hover(function(){
    $("#text2").delay("slow");
    $("#text2").hide();
     
});