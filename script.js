const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

const emoji = '🤩';

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string!', '🤓');
console.log(`Hello I am a ${emoji}`);

// Styled
console.log('%c I am some great text', 'font-size: 25px; background: purple; text-shadow: 5px 5px 0 darkslategray');

// warning!

// Error :|

// Info

// Testing

// clearing

// Viewing DOM Elements

// Grouping together

// counting

// timing