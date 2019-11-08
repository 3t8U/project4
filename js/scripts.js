// Bussiness Logic
function Pizza(size,toppings){
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

Pizza.prototype.getPrice = function(){
  $(this.toppings).each(function() {
    this.price += 1;
  })
  if (this.size === "s"){
    this.price += 5;
  } else if (this.size === "m") {
    this.price += 10;
  } else {
    this.price += 15;

  }
  return this.price;
}




// User Logic
$(document).ready(function(){
  $("form#order").submit(function(event) {
    event.preventDefault();
    var toppingArray = [];
    var sizeInput = $("#size").val()
    console.log(sizeInput);
    var toppingsInput = $("input:checkbox[name=toppings-select]:checked");
    toppingsInput.each(function(){
      console.log($(this).val());
      toppingArray.push(toppingsInput.val());
    });

    var myPizza = new Pizza (sizeInput, toppingArray)
    var price = myPizza.getPrice();
  });
});
