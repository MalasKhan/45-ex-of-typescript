var Name = "malas khan";
console.log(Name.toLowerCase());
console.log(Name.toUpperCase());
console.log('Titlecase', Name.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
