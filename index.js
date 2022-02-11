// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.unshift(name);
}

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

function destructivelyAppendCat(name) {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    return [...cats,name];
}

function destructivelyAppendCat(name) {
    cats.push("Ralph")   
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function prependCat(name) {
    return cats.slice()
}

function prependCat(name) {
    return [name, ...cats] 
}

function removeFirstCat() {
    return cats.slice(1);
}

function removeLastCat() {
    return cats.slice(0.1,2)
}

