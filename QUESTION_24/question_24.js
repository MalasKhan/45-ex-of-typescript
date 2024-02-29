/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */
var string = "car";
var string2 = "cat";
console.log(string == "Car".toLowerCase(), " is car  equal to Car?"); // false, no
var number = 47;
console.log(number > 67, "checks if 47 is greater than 67");
console.log(string && string2 == "car", "checks if car  AND cat are both true");
var or = string || string2 == "car";
console.log(or, "checks if car  OR cat are both true");
