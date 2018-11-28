let strAsc = '';
for (let i = 1; i < 10; i++) {
    for (let j = 1; j <= i; j++) {
        strAsc += `${j} * ${i} = ${j * i}\t`;
    }
    strAsc += '\n';
}
console.log(strAsc);    // 九九乘法表，正序

let strDesc = '';
for (let i = 9; i > 0; i--) {
    for (let j = 1; j <= i; j++) {
        strDesc += `${j} * ${i} = ${j * i}\t`;
    }
    strDesc += '\n';
}
console.log(strDesc);   // 九九乘法表，倒序