function getTotal(){
    var total = 0 ;
    $('.sum').each(function(){
        total += parseFloat(this.innerHTML)
    });
    $('#total').text(total);
}

getTotal();

$('.qty').keyup(function(){
    console.log(this)
    var parent = $(this).parents('tr');
    var price = $('.price', parent);
    var sum = $('.sum', parent);
    var value = parseFloat(this.value) * parseFloat(price.get(0).innerHTML||0);
    sum.text(value);
    getTotal();
})