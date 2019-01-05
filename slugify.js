var slugify = require('slugify');

const text = "deneme bir iki üç";
const slug = slugify(text);

console.log(slug);