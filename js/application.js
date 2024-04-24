$(document).ready(function(){
  $(document).on('click', '#calculate', function() {
    $('.item-subtotal').value(Number($(this).parent().children('.item-price')) * Number($(this).parent().children('.item-qty')));
  }
}
