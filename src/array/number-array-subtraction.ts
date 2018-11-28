const a = [1, 2, 3, 4, 5];
const b = [1, 2, 3];

const x = a.filter(item => {
    return !b.includes(item);
});

console.log(x); // [4, 5]