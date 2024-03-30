//Name Cases: Store a person’s name in a variable, and then print that person’s name in
// lowercase, uppercase, and titlecase.

var person_name = "Malas khan";
console.log(person_name.toLowerCase());
console.log(person_name.toUpperCase());

const titleCase = (str: string): string => {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

console.log(titleCase(person_name));