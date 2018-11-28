const token = 'token=123sklhdfkjsdfghkjsdgfs/asdfkufy=';

console.log(token.split('=')[0]);
console.log(token.substring(token.indexOf('=') + 1));