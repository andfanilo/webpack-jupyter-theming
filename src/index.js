import "./style.css";

console.log("Hello custom.js file");

define(["jquery", "notebook/js/cell"], function($, cell) {
  ("use strict");

  /* Hack through Cell init_classes prototype to add custom CSS classes on cell creation*/
  var Cell = cell.Cell;
  var old_init_classes = Cell.prototype.init_classes;
  Cell.prototype.init_classes = function() {
    var response = old_init_classes.apply(this, arguments);
    console.log("created Cell");
    this.element.addClass("hello");
    return response;
  };
});
