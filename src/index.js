import "animate.css";
import "./style.css";

console.log("Hello custom.js file");

define(["jquery", "notebook/js/cell"], function($, cell) {
  ("use strict");

  $.fn.extend({
    animateCss: function(animationName, callback) {
      var animationEnd = (function(el) {
        var animations = {
          animation: "animationend",
          OAnimation: "oAnimationEnd",
          MozAnimation: "mozAnimationEnd",
          WebkitAnimation: "webkitAnimationEnd"
        };

        for (var t in animations) {
          if (el.style[t] !== undefined) {
            return animations[t];
          }
        }
      })(document.createElement("div"));

      this.addClass("animated " + animationName).one(animationEnd, function() {
        $(this).removeClass("animated " + animationName);

        if (typeof callback === "function") callback();
      });

      return this;
    }
  });

  /* Hack through Cell init_classes prototype to run animate.css class on cell creation*/
  var Cell = cell.Cell;
  var old_init_classes = Cell.prototype.init_classes;
  Cell.prototype.init_classes = function() {
    var response = old_init_classes.apply(this, arguments);
    $(this.element).animateCss("bounceIn");
    return response;
  };
});
