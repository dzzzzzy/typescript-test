import * as xml2js from 'xml2js';

function convertObjToXml(obj: any) {
    return new xml2js.Builder({ rootName: 'xml', cdata: true }).buildObject(obj);
}

function parseObjFromXml<T>(xml: any): T {
    const parser = new xml2js.Parser({ explicitRoot: false, explicitArray: false });
    let obj;
    parser.parseString(xml, (error, result) => {
        if (error) {
            throw Error(error);
        }
        obj = result;
    });
    return obj;
}

const xml = convertObjToXml({
    mch_id: '1235851702',
    nonce_str: '{"goods_detail":[ { "goods_id":"<iphone6s_16G>", "body":"苹果手机" }]}',
    sign: 'aa'
});
console.log(xml);

// 尽管 T 中没有 sign，但结果依然会存在 sign
const obj = parseObjFromXml<{ mch_id: string, nonce_str: string }>(xml);
console.log(obj);