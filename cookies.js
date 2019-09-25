$(document).ready(function() {
  var counter = 0; 
  // On cookie click, increment counter 
  $(document).on("click", ".cookie-pic", function(e) {
      counter += 1
      alert("hello world")
  });
});