interface Spaceship {
	name: string;
	warpDriveEnabled: boolean;
}

type spaceshipName = Pick<Spaceship, 'name'>;
type withotName = Omit<Spaceship, 'name'>;

const updateShip = (id: number, spaceship: Partial<Spaceship>) => {};

updateShip(28, { name: 'USS Enterprise' });

const spaceship: Record<string, Spaceship> = {
	enterprise: {
		name: 'Enterprise',
		warpDriveEnabled: true,
	},
	eclipse: {
		name: 'Eclipse',
		warpDriveEnabled: true,
	},
};

type AvailableDrinks = 'Coffee' | 'Beer' | 'Pelinkovac' | 'Rakija';

let andrewsDrink: AvailableDrinks;
andrewsDrink = 'Rakija';

type DrinksEmmanuelleDoesntLike = 'Coffee' | 'Pelinkovac';
let emmanuellesDrink: Exclude<AvailableDrinks, DrinksEmmanuelleDoesntLike>;
emmanuellesDrink = 'Beer';

type myFavoriteDrinks = 'Coffee' | 'Beer' | 'Rakija' | 'Sprite';
let myDrinks: Extract<AvailableDrinks, myFavoriteDrinks>;
myDrinks = 'Coffee';

interface spaceshipColors {
	color?: 'black' | 'gray' | 'navyBlue';
}

function paintShip(id: number, color: NonNullable<spaceshipColors['color']>) {
	return { id, color };
}

type paintShipType = ReturnType<typeof paintShip>;

type Constructable<ClassInstance> = new (...args: any[]) => ClassInstance;

function deleter<BaseObj extends Constructable<{}>>(Base: BaseObj) {
	return class extends Base {
		deleted: boolean;
		delete() {}
	};
}

class Car {
	constructor(public name: string) {}
}

class User {
	constructor(public name: string) {}
}

const deletableCar = deleter(Car);
const deletableUser = deleter(User);

type deletableCarInstance = InstanceType<typeof deletableCar>;
type deletableUserInstance = InstanceType<typeof deletableUser>;

class Person {
	user: deletableUserInstance;
	car: deletableCarInstance;
}

const profile = new Person();
profile.user = new deletableUser('Zdeslav');
profile.car = new deletableCar('Lada');

interface MyObject {
	sayHello(): void;
}

interface MyObjectThis {
	helloWorld(): string;
}

const myObject: MyObject & ThisType<MyObjectThis> = {
	sayHello() {
		this.helloWorld();
	},
};

myObject.sayHello = myObject.sayHello.bind({
	helloWorld() {
		return 'Hello World!';
	},
});

console.log(myObject.sayHello());
