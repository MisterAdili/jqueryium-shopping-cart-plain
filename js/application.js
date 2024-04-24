$(document).ready(function(){
  $('.item-subtotal').change(function(){
    $(this).value(Number($(this).parent().children('.item-price')) * Number($(this).parent().children('.item-qty')));
  }
}
