// 对象数组去重

let arr = [{
    name: 'jack'
}, {
    name: 'tom'
}, {
    name: 'pony'
}, {
    name: 'jack'
}];

// 定义一个用来去重的k-v对象
const hash = {};

// reduce 方法中第二个参数是item的初始值，如果没有初始值，那item就为arr(被reduce的数组)
arr = arr.reduce((item, next) => {
    // 如果k-v中存在 next.name 这个键值,则代表当前数据与之前的重复了，否则将不重复的数据添加到初始化的空数组中，然后给hash[next.name]赋值为item数组的长度
    hash[next.name] ? '' : hash[next.name] = item.push(next);
    return item;
}, []);

console.log(hash);  // { jack: 1, tom: 2, pony: 3 }
console.log(arr);   // [ { name: 'jack' }, { name: 'tom' }, { name: 'pony' } ]