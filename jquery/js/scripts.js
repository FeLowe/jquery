$(document).ready(function(){
  $("h1").dblclick(function() {
    alert("This is a header.");
  });

  $("p").hover(function() {
    alert("This is a paragraph");
  });

  $("img").click(function() {
    alert("This is an image.");
  });

  $("h2").hover(function() {
    alert("This is a h2.");
  });

  $("ul").dblclick(function() {
    alert("This is an unordered list.");
  });

});
