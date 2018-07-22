import "animate.css";
import "./style.css";

console.log("Hello custom.js file");

define(["jquery", "notebook/js/cell"], function($, cell) {
  ("use strict");

  /* Hack through Cell init_classes prototype to add custom CSS classes on cell creation*/
  var Cell = cell.Cell;
  var old_init_classes = Cell.prototype.init_classes;
  Cell.prototype.init_classes = function() {
    var response = old_init_classes.apply(this, arguments);
    this.element.addClass("animated bounceIn");
    return response;
  };
});
