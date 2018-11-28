import * as crypto from 'crypto';

function encrypt(aesKey: string, secret: string) {
    // 使用 aesKey 生成加密 key
    const key = crypto.createHash('sha256').update(aesKey).digest();
    // 初始化向量，截取key前16字节
    const iv = key.slice(0, 16);
    // 使用 aes-256-cbc 算法创建 cipher
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    // 加密
    const cipherText = Buffer.concat([cipher.update(Buffer.from(secret)), cipher.final()]);
    return cipherText.toString('base64');
}

function decrypt(aesKey: string, secret: string) {
    // 使用 aesKey 生成解密 key
    const key = crypto.createHash('sha256').update(aesKey).digest();
    // 初始化向量，截取key前16字节
    const iv = key.slice(0, 16);
    // 使用 aes-256-cbc 算法创建 decipher
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    // 解密
    const originalText = Buffer.concat([decipher.update(secret, 'base64'), decipher.final()]);
    // 返回原文
    return originalText.toString();
}

const encrypted = encrypt('dzzzzzy', 'hola');
console.log(encrypted);
const decrypted = decrypt('dzzzzzy', encrypted);
console.log(decrypted);