// Write your solution here!

const template = ['Milo', 'Otis', 'Garfield'];

const append = template.slice();
const prepend = template.slice();
const removeLast = template.slice();
const removeFirst = template.slice();

append.push('Odie');
prepend.unshift('Odie');
removeLast.pop();
removeFirst.shift();
