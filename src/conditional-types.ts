type SomeType = string;
type ConditionalType = SomeType extends string ? string : null;

function someFn<T>(input: T) {
	type A = T extends number ? 'TYPE1' : T extends string ? 'TYPE2' : T extends boolean ? 'TYPE3' : 'TYPE4';
	const someotherFn = (arg: T extends boolean ? 'TYPE1' : 'TYPE2') => {
		const a: 'TYPE1' | 'TYPE2' = arg;
	};
	return someotherFn;
}

const rezult = someFn(true);

type StringOrNot<T> = T extends string ? string : never;

type InferSomething<T> = T extends infer U ? U : any;


