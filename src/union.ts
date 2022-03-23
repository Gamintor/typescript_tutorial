interface Dog {
	barf(): void;
	walk(): void;
}

interface Cat {
	meow(): void;
	walk(): void;
}

function isDog(someObj: Cat | Dog): someObj is Dog {
	return (<Dog>someObj).barf !== undefined;
}

function callAnyVegetable(pet: Cat | Dog) {
	pet.walk();
	if (isDog(pet)) {
		pet.barf();
	} else {
		pet.meow();
	}
}
