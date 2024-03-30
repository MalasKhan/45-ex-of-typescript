/* Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message
 that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a
  shirt of any size with a different message.
*/

function  make_shirt2(size = "large", msg = "I love TypeScript") {
    console.log("This t-shirt is " + size + ". It says \"" + msg + "\".")}

make_shirt2("large",);
make_shirt2("Medium");
make_shirt2("small","I love coding!");
