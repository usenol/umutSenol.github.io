
$(document).ready(function () {
  $(".submit-button").click(function () {
    if (validateForm()) {
      alert("Successful!");
      $(this).attr('style', "background-color:rgba(12, 192, 223, 0.466);color:white;border:rgba(12, 192, 223, 0.466)")
      $(this).attr('class', "completed");
      $('.completed').html('Completed');

    }
  })
});



