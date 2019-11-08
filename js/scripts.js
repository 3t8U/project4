// Bussiness Logic
function Pizza(size,toppings){
  this.size = size;
  this.toppings = topping;
  this.price = 0;
}

Pizza.protoype.getPrice = function(){
  this.toppings.foreach(function(topping) {
    this.price += 1;
  }
  if (this.size === "s"){
    this.price += 5;
  } else if (this.size === "m") {
    this.price += 10;
  } else {
    this.price += 15,
  }
  return thisprice;




}
}




// User Logic
$(document).ready(function(){
  $("form#order").submit(function(event) {
    event.preventDefault();
    var toppingsInput = $("input:checkbox[name=toppings-select]:checked").each();
    var toppingArray = [];
    var sizeInput = $("#size").val()



  });
});
