$(document).ready(function(){
  
  function sum() {
    var items = $('.item-subtotal');
    var sum = 0;
    
    for (i = 0; i<items.length; i++){
      var price = Number($(".item-price").eq(i).text());
      var qty = Number($(".quantity").eq(i).val());
      var subtotal = Number(price * qty);
      $('.item-subtotal').eq(i).text(subtotal);
      sum += subtotal;
      $('#total-price').text(sum);
    }
    return;
  }

  function addRow(){
    $('.item').eq(0).clone().appendTo('#main-table');
    newItem = $('.item').length - 1;
    $('.item-name').eq(newItem).text($('#name').val());
    $('.item-price').eq(newItem).text($('#cost').val());
    $('.quantity').eq(newItem).val($('#qty').val());
  }

  sum();

  $(document).on('click', '.calculate', function() {
    sum();
  });

  $(document).on('click', '#addButton', function(){
    addRow();
    sum();
  });

  $(document).on('click', '.remove', function() {
    if($('.item').length > 1){
      $(this).parent().parent().remove();
    }
    sum();
  });

  $(document).on('change', $('input'),function() {
    sum();
  });
});  
