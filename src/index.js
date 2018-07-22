import "./style.css";

console.log("Hello custom.js file");

define(["jquery", "base/js/namespace", "base/js/events"], function(
  $,
  Jupyter,
  events
) {
  ("use strict");
  console.log(Jupyter.notebook);
  console.log(Jupyter.notebook.get_cells());

  events.on("create.Cell", function() {
    console.log("Created a cell");
  });

  events.on("delete.Cell", function() {
    console.log("Deleted a cell");
  });
});
