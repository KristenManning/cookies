$(document).ready(function() {
  var counter = 0; 

  $(document).on("click", ".cookie-pic", function(e) {
      counter += Math.floor((Math.random() * 3) + 1)
      var display_count = "Count = " + counter
      $("#count").text(counter)
  });
});