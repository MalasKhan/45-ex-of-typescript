
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let lName: string = "malas khan";
console.log(lName.toLowerCase());
console.log(lName.toUpperCase());
console.log(lName.replace(/\b\w/g,c=> c.toUpperCase()));