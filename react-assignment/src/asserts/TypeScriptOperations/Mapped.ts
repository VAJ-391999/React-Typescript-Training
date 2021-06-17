export type Properties = 'propA' | 'propB';
type MyMappedType<T> = {
    [P in keyof T]: T[P];
};

type MyNew = MyMappedType<{a: 'a', b: 'b'}>

type Pick1<T, Properties extends keyof T> = {
    [P in Properties]: T[P];
};

type MyNew2 = Pick1<{a: 'a', b: 'b'}, 'a' | 'b'>;

type Record1<K extends keyof any, T> = {
    [P in K]: T;
}
const someRecord : Record1<string, number> = {};

someRecord.apple = 10;
someRecord.orange = 10;

interface Record2 {
    [key: string]: number;
}