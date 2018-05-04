$("#container").mousemove(function(e) {
  parallaxIt(e, ".techo", -50);
	parallaxIt(e, ".gradas", -50);
	parallaxIt(e, ".estructura", -50);
	parallaxIt(e, ".piso", -50);
  parallaxIt(e, "img", -40);
});

function parallaxIt(e, target, movement) {
  var $this = $("#container");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}
