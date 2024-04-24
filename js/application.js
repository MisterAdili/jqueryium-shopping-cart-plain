$(document).ready(function(){
  
  var sum = function (){
    var items = $(".item");
    for (i = 0; i<items.length; i++){
      var qty = $($('.item')[i]).children(.item-qty).text();
      var price = $($('.item')[i]).children(.item-price).text();
      var subtotal = qty * price;
      $($('.item-subtotal')[i]).text(subtotal); 
    }
  }
  
  
  $(document).on('click', '#calculate', function() {
    sum();
  });
});
