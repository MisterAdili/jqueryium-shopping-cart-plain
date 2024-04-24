$(document).ready(function(){
  
  var sum = function (){
    var items = $(".item");
    for (i = 0; i<item.length; i++){
      var subtotal = 5;
      $($('.item-subtotal')[i]).text(subtotal); 
    }
  }
  
  
  $(document).on('click', '#calculate', function() {
    sum();
  });
});
