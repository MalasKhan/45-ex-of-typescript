// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of
//  invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest
//  who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
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
