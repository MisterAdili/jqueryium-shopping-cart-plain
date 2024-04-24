$(document).ready(function(){
  
  var sum = function (){
    var subtotals = $(".item-subtotal");
    var prices = $(".item-price");
    var qtys = $(".quantity");
    
    for (i = 0; i<items.length; i++){
      var price = Number($(prices[i]).text());
      var qty = Number($(qtys[i]).val();
      var subtotal = price * qty;
      $(subtotals[i]).text(price); 
    }
  }
  
  
  $(document).on('click', '#calculate', function() {
    sum();
  });
});
