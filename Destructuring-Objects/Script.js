const restaurant = {
    name: 'Classico Italiano',
    loccation: 'Via Angelo Tavanti 24, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },
    order: (starterIndex, mainIndex) => {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
};

const { name, openingHours, categories } = restaurant;
console.log("Name:", name, "openingHours:", "categories:", categories);

const { name: restauranName, openingHours: hours, categories: tags } = restaurant;
console.log("AD:", restauranName, hours, tags);

//Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log("Menu:", menu, starters);

//Mutating varables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log("A:", a, "B:", b);
