// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program 
// informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
//  • Print a new set of invitation messages, one for each person in your list.
var names = ["mamma", "papa", "kaif bhai"];
for (var i = 0; i < names.length; i++) {
    console.log("Hey ".concat(names[i], ", I'd love for you to join me and my family for dinner!"));
}
var unavailableNames = ["kaif bhai"];
console.log("".concat(unavailableNames, "Sorry that you can't attend ."));
names[2] = "moshi bhai";
for (var i = 0; i < names.length; i++) {
    console.log("Hey ".concat(names[i], ", I'd love for you to join me and my family for dinner!"));
}
console.log("I have also found a bigger dinner table.");
names.unshift("sajad bhai");
names.splice(names.length / 2, 0, "abbas bhai");
names.push("ali bhai");
for (var i = 0; i < names.length; i++) {
    console.log("Hey ".concat(names[i], ", I'd love for you to join me and my family for dinner!"));
}
