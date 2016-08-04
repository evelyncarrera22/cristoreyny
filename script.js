$("#cristo").click(function(){
  $("#heading").slideToggle("slow");
});


$("#cristo").click(function(){
  $("#heading").fadeToggle();
  $(".description").fadeToggle("slow");
  $(".candy").fadeToggle(3000);
});
$("h1").css({"color":"#FF0066","font-size":"300%"});