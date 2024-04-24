$(document).ready(function(){
  
  var sum = function (){
    var items = $(".item");
    var qty = $(".quantity");
    
    for (i = 0; i<items.length; i++){
      var price = $($('.item')[i]).children(.item-price).text();
      var subtotal = Number($(qty[i]).val();
      $($('.item-subtotal')[i]).text(subtotal); 
    }
  }
  
  
  $(document).on('click', '#calculate', function() {
    sum();
  });
});
