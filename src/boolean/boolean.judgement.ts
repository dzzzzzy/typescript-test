// 常见判断
console.log('常见判断');
console.log(!-1);           // false
console.log(!0);            // true
console.log(!1);            // false
console.log(!'');           // true
console.log(!undefined);    // true
console.log(!null);         // true
console.log(![].length);     // true

// 判断 NaN
console.log('\nNaN 判断......');
console.log(isNaN(Number('string')));    // true
console.log(isNaN(Number('123string')));    // true
console.log(isNaN(Number('123')));    // false
console.log(isNaN(123));    // false
