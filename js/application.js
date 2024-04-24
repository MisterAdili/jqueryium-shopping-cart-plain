$(document).ready(function(){
  $('.item-subtotal').change(function(){
    $(this).value($(this).parent().children('.item-price') * $(this).parent().children('.item-qty'));
  }
}
