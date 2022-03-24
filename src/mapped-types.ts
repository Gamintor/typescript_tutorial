type Properties = 'propA' | 'propB';
type MyMappedType<Properties extends string | number | symbol> = {
	[P in Properties]: P;
};

type MyNewType = MyMappedType<'propA' | 'propB'>;

type MyMappedTyp<T> = {
	[P in keyof T]: T[P];
};

type MyNewTyp = MyMappedTyp<{ a: 1; b: 2 }>;

type Pick1<T, Properties extends keyof T> = {
	[P in Properties]: T[P];
};

type MyPick = Pick1<{ a: 'a'; b: 'b' }, 'b'>;

type Record1<K extends keyof any, T> = {
	[P in K]: T;
} & { someProp: string };

const someRecord: Record1<'A' | 'B', number> = { A: 10, B: 12, someProp: 'prop' };

interface Record2 {
	[key: number]: number;
}
