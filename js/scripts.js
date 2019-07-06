//business logic
//set up pizza constructor w/ size property, classic toppings array, special toppings array
function Pizza(size, classicToppings, specialToppings) {
  this.size = size;
  this.classicToppings = [];
  this.specialToppings = [];
}
//set up order constructor w/ name property, number property, pizza property
function Order(name, number, pizza) {
  this.name = name;
  this.number = number;
  this.pizza = [];
}

//set up prototype on pizza constructor to calculate price based on size property and number of items in each array (15 or 18 + .25*classic or .50*classic [or, if lg, *2?]+ .50*special or 1*special[or, if lg, *2?])
Pizza.prototype.price = function() {
  var pizzaPrice = 0
  if (this.size === "small") {
    pizzaPrice += 15;
  } else {
    pizzaPrice += 20;
  }
  console.log(pizzaPrice);
}

//user interface logic
//set up jQuery to accept form with size (req) and toppings; upon submit of #selection: create new object/instance of Pizza with size and topping properties; show #pizzaOrder div and insert text from object into div selection along with new price property based on prototype method; calculate and reveal total for multiple pizzas regardless of quantity; clear selection form so that new pizza objects can be created and added without refreshing page;
$(document).ready(function() {

  $("#selection").submit(function(event) {
    event.preventDefault();
    console.log("selections submitted");
    var pizzaSize = $("#pizzaSize").val();
    var classicToppings = [];
    var specialToppings = [];
    var newPizza = new Pizza(pizzaSize, classicToppings, specialToppings);

    $("input:checkbox[name=classic-topping]:checked").each(function() {
      var classicTopping = $(this).val();
      newPizza.classicToppings.push(classicTopping);
    })

    $("input:checkbox[name=special-topping]:checked").each(function() {
      var specialTopping = $(this).val();
      newPizza.specialToppings.push(specialTopping);
    })

    console.log(newPizza.classicToppings);
    console.log(newPizza.specialToppings);
    console.log(newPizza);

    $("#pizzaOrder").show();
    $("#pizzaList").append("<li>" + newPizza.pizzaSize + " pizza with " + newPizza.classicToppings + newPizza.specialToppings + "</li>");
    $("#selection").trigger("reset");
  })

})
//upon submit of #order, create new object/instance of Order with new inputs for name and number along with Pizza objects/instances; show #confirmation div with thank-you message along with properties of order object
