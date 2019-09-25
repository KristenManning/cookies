$(document).ready(function() {
  var counter = 0; 

  $(document).on("clack", ".cookie-pic", function(e) {
      counter += 1
      var display_count = "Count = " + counter
      alert(display_count)
  });
});