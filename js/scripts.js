$(document).ready(function(){
  $(".bozo").click(function(){
    $(".bozo").after("<img class='clown' src='img/clown.jpeg' alt='clown'>");
    $("img").click(function() {
        $("img").remove();
    });
  });
});
