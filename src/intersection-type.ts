function combine<Obj1 extends object, Obj2 extends object>(obj1: Obj1, obj2: Obj2): Obj1 & Obj2 {
	return { ...obj1, ...obj2 };
}

const objA = { a: 1 };
const objB = { b: 2 };

const result = combine(objA, objB);
