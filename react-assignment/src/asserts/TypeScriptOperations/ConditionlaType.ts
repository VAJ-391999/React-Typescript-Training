export type Sometype = string;
type MyConditionalType = Sometype extends string ? string : null;


type ResultType = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;


type MyType<T> = T extends string | number ? T : never;
type MyResult = MyType<string | number | boolean>;

type InfeSomthing<T> = T extends infer U ? U : any;
type inferred = InfeSomthing<'hi'>;

type InferSomthing2<T> = T extends {a: infer A; b: number} ? A : any;
type Inferred2 = InferSomthing2<{a: 0, b: 1}>;

function someFunction<T>(value: T) {

    type A = T extends boolean ? 'Type A' 
    : T extends string ? 'Type B' 
    : T extends number ? 'Type C' 
    : 'Type D';

    const someOtherFunction = (
        someArg: T extends boolean ? "Type A" : "Type B"
    ) => {};
    return someOtherFunction;
}

const result = someFunction('');

