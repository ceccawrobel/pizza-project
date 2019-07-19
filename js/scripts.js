//business logic
//set up pizza constructor w/ size property, classic toppings array, special toppings array
function Pizza(size, classicToppings, specialToppings, price) {
  this.size = size;
  this.classicToppings = [];
  this.specialToppings = [];
  this.price = price;
}
//set up order constructor w/ name property, number property, pizza property
function Order(name, number, pizza) {
  this.name = name;
  this.number = number;
  this.pizza = [];
}

//set up prototype on pizza constructor to calculate price based on size property and number of items in each array (15 or 18 + .25*classic or .50*classic [or, if lg, *2?]+ .50*special or 1*special[or, if lg, *2?]) **getting the below to work w/o error messages, but can't figure out how to add in the array length to the price, with or w/o parseInt, same line or second line, etc.
Pizza.prototype.priceCalc = function() {
  var thePrice = 0
  if (this.size === "small") {
    thePrice += 15;
  } else {
    thePrice += 20;
  }
  thePrice += this.classicToppings.length;
  thePrice += (this.specialToppings.length * 2);
  return thePrice;
}

//user interface logic
//set up jQuery to accept form with size (req) and toppings; upon submit of #selection: create new object/instance of Pizza with size and topping properties; show #pizzaOrder div and insert text from object into div selection along with new price property based on prototype method; calculate and reveal total for multiple pizzas regardless of quantity; clear selection form so that new pizza objects can be created and added without refreshing page;
$(document).ready(function() {
  var allPrices = []

  $("#selection").submit(function(event) {
    event.preventDefault();
    console.log("selections submitted");
    var newSize = $("#pizzaSize").val();
    var newClassicToppings = [];
    var newSpecialToppings = [];
    var newPrice = 0;
    var newPizza = new Pizza(newSize, newClassicToppings, newSpecialToppings, newPrice);
    newPrice = newPrice + newPizza.priceCalc();

    $("input:checkbox[name=classic-topping]:checked").each(function() {
      newClassicTopping = $(this).val();
      newPizza.classicToppings.push(newClassicTopping);
    })

    $("input:checkbox[name=special-topping]:checked").each(function() {
      newSpecialTopping = $(this).val();
      newPizza.specialToppings.push(newSpecialTopping);
    })

    newPrice = newPizza.priceCalc();
    newClassicToppings = newPizza.classicToppings;
    newSpecialToppings = newPizza.specialToppings;

    newPizza = {
      size: newSize,
      classicToppings: newClassicToppings,
      specialToppings: newSpecialToppings,
      price: newPrice
    };

    var toppingsListHtmlTags = []

    newPizza.classicToppings.forEach(function(classicTopping) {
      toppingsListHtmlTags.push("<li>" + classicTopping + "</li>");
    });
    newPizza.specialToppings.forEach(function(specialTopping) {
      toppingsListHtmlTags.push("<li>" + specialTopping + "</li>");
    });

    console.log(toppingsListHtmlTags);

    allPrices.push(newPizza.price);
    console.log(allPrices);
    var totalPrice = 0
    allPrices.forEach(function(price) {
      totalPrice += price
    });
    console.log(totalPrice);

    $("#pizzaOrder").show();
    $("#pizzaList").append("<b>a " + newPizza.size + " pizza </b>with <ul class='toppingsList'></ul><p>$" + newPizza.price + ".00 <br>");
    toppingsListHtmlTags.forEach(function(toppingListHtmlTag) {
      $(".toppingsList:last-of-type").append(toppingListHtmlTag);
    })
    $("#orderSpan").text("Your total is $" + totalPrice + ".00");
    $("#selection").trigger("reset");
  })

})
//upon submit of #order, create new object/instance of Order with new inputs for name and number along with Pizza objects/instances; show #confirmation div with thank-you message along with properties of order object
