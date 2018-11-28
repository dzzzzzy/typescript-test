import * as chance from 'chance';
import generate = require('nanoid/generate');

// chance 会有重复问题
function judgeChanceSame() {
    let i = 0;
    const rdArr = [];
    while (i < 1000000) {
        const rd = chance().string({ length: 14, pool: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' });
        rdArr.push(rd);
        i++;
    }
    console.log(rdArr.length);
    console.log([...new Set(rdArr)].length);
}
// judgeChanceSame();

// 强随机，重复概率可以在 https://zelark.github.io/nano-id-cc/ 查询
function judgeNanoidSame() {
    let i = 0;
    const rdArr = [];
    while (i < 10000000) {
        const rd = generate('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 14);
        rdArr.push(rd);
        i++;
    }
    console.log(rdArr.length);
    console.log([...new Set(rdArr)].length);
}
// judgeNanoidSame();