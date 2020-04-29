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
console.warn('OH NO');

// Error :|
console.error('Eeek!');

// Info
console.info('Crocodiles eat 3-4 people per year');

// Testing
const p = document.querySelector('p');
console.assert(1 === 2, 'That is wrong');
console.assert(p.classList.contains('bold'), 'No such class on this element.');

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
    // console.group(`${dog.name}`);
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
})

// counting

// timing