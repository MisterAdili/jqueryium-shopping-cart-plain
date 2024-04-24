$(document).ready(function(){
  $('.item-subtotal').change(function(){
    $(this).text() = $(this).parent().children('.item-price') * $(this).parent().children('.item-qty');
  }
}
