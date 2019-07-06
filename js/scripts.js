//business logic
//set up pizza constructor w/ size property, classic toppings array, special toppings array

//set up order constructor w/ name property, number property, pizza property

//set up prototype on pizza constructor to calculate price based on size property and number of items in each array (15 or 18 + .25*classic or .50*classic [or, if lg, *2?]+ .50*special or 1*special[or, if lg, *2?])

//user interface logic
//set up jQuery to accept form with size (req) and toppings; upon submit of #selection: create new object/instance of Pizza with size and topping properties; show #pizzaOrder div and insert text from object into div selection along with new price property based on prototype method; calculate and reveal total for multiple pizzas regardless of quantity; clear selection form so that new pizza objects can be created and added without refreshing page;
//upon submit of #order, create new object/instance of Order with new inputs for name and number along with Pizza objects/instances; show #confirmation div with thank-you message along with properties of order object
