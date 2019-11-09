// Bussiness Logic
function Pizza(size,toppings){
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

Pizza.prototype.getPrice = function(){
  console.log(this.toppings);
  for(i=0; i< this.toppings.length; i++) {
    this.price += 1;
  }
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
  console.log(toppingArray.length);
  var newToppings = " "
  for(i=0;  i < toppingArray.length; i++){
    newToppings = newToppings.concat(toppingArray[i])
    if (i === toppingArray.length - 2) {
      newToppings = newToppings.concat(" and ");
    } else if (i < toppingArray.length -2) {
      newToppings = newToppings.concat(", ")
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

    var myPizza = new Pizza (sizeInput, toppingsInput)
    var price = myPizza.getPrice();
    var toppingz = myPizza.makeAnd(toppingArray);


    $("#sz").text(sizeInput);
    $("#tp").text(toppingz);
    $("#tl").text( "$" + price);

    $("#results").show();
  });
});
