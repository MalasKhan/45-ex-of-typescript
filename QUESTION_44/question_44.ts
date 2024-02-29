/* Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
 The function should have one parameter that collects as many items as the function call provides,
  and it should print a summary of the sandwich that is being ordered. Call the function three times,
   using a different number of arguments each time.
*/

function  orderSandwich(arr, arr2 ,arr3, arr4 = "Extra Cheese") {
    const args = Array.from(arguments);
    console.log(`You are ordering a ${args.join(' ')} sandwich.`);
}

orderSandwich("BLT", "Turkey", "Cheese");
// logs: You are ordering a BLT Turkey Cheese sandwich.

orderSandwich("Avocado", "Tomato", "Cucumber", "Red Onion");
// logs: You are ordering an Avocado Tomato Cucumber Red Onion sandwich.

orderSandwich("Chicken", "Swiss", "Mozzarella", "Pepperoni");
// logs: You are ordering a Chicken Swiss Mozzarella Pepperoni sandwich