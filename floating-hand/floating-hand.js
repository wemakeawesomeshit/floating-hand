(function($) {

  var hand = $('<div id="floating-hand"/>');
  $(document).ready(function() {
    $("body").append(hand);
    hand = hand[0];
    $("*").on("mousedown", function() {
      hand.className = "active";
    }).on("mouseup", function() {
      hand.className = "";
    });

    var origin = {
      x: window.innerHeight,
      y: window.innerWidth
    };

    $(window).on("mousemove", handleMouseMove);
    function handleMouseMove(event) {
        event = event || window.event; // IE-ism
        // event.clientX and event.clientY contain the mouse position
        hand.style.left = event.clientX-92+"px";
        hand.style.top = event.clientY-5+"px";
        var leftSide = false;
        var d = {
          x: origin.x - event.clientX,
          y: origin.y - event.clientY
        };

        var angle = Math.atan2(d.x, d.y) * 180 / Math.PI * -1;
        if (leftSide) {
          //angle = angle * -1;
        }
        hand.style["-webkit-transform"] = "rotate("+parseInt(angle,10)+"deg)";
        hand.style["transform"] = "rotate("+parseInt(angle,10)+"deg)";
    }
  });
})(jQuery);

