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
  if (this.size === "Small"){
    this.price += 5;
  } else if (this.size === "Medium") {
    this.price += 10;
  } else {
    this.price += 15;

  }
  return this.price;
}
Pizza.prototype.makeAnd = function(toppingArray){
  var newToppings = " "
  for(i=0;  1 <toppingArray.length; i++){
    $(newToppings).append(toppingArray[i])
    if (i === toppingArray.length - 1) {
      $(newToppings).append(" and ");
    } else if ((i < toppingArray.length -1) && (i > 0)){
      $(newToppings).append(", ")
    }
  }
  return newToppings;
}






// User Logic
$(document).ready(function(){
  $("form#order").submit(function(event) {
    event.preventDefault();
    var toppingArray = [];
    var sizeInput = $("#size").val()
    var toppingsInput = $("input:checkbox[name=toppings-select]:checked");
    toppingsInput.each(function(){
      toppingArray.push($(this).val());
    });

    var myPizza = new Pizza (sizeInput, toppingArray)
    var price = myPizza.getPrice();
    var toppingz = myPizza.makeAnd(toppingArray);


 $("#sz").text(sizeInput);
 $("#tp").text(toppingz);
 $("#tl").text( "$" + price);

  });
});
