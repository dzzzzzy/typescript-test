async function test() {
    return setTimeout(() => {
        console.log('after 1 second');
    }, 1000);
}

const aaa = test().then(data => data);
console.log(aaa);
