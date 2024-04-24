$(document).ready(function(){

  sum();
  
  var sum() = function{
    $('#item-subtotal').text("5");
  }
  
  $(document).on('click', '#calculate', function() {
    sum();
  });
}
