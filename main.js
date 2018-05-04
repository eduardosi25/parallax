$("#container").mousemove(function(e) {
  parallaxIt(e, ".techo", -100);
	parallaxIt(e, ".gradas", -100);
	parallaxIt(e, ".estructura", -100);
	parallaxIt(e, ".piso", -100);
  parallaxIt(e, "img", -30);
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
