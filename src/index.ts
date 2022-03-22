class Robot {
	#name: string;

	private somePrivateField = 'it is private!!!';

	constructor(name: string) {
		this.#name = name;
	}

	getName(): string {
		return this.#name;
	}
}

class AdvancedRobot extends Robot {
	#name: string;

	private somePrivateField = 'OVERRIDEN FIELD';

	constructor(name: string) {
		super(name);
		this.#name = 'Advanced' + name;
	}

	getAdvancedName(): string {
		return this.#name;
	}
}

const robot = new AdvancedRobot('Lojza');

console.log('Private field', robot.somePrivateField);

console.log('Parent class: ', robot.getName());
console.log('Subclass: ', robot.getAdvancedName());
