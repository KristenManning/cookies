$(document).ready(function() {
  var counter = 0; 
  // On cookie click, increment counter 
  $(document).on("click", ".cookie-pic", function(e) {
      counter += 1
      var display_count = "Count = " + counter
      alert(display_count)
  });
});