function animation(){
  var circles = document.getElementsByClassName('circle');
  for (var i = 0; i < circles.length; i++) {
    circles[i].classList.add("animate");
  }
  setTimeout(function(){
    for (var i = 0; i < circles.length; i++) {
      circles[i].classList.remove("animate");
    }
  }, 3000);
}
