interface Expirable {
	expiryDate: Date;
}

interface ChocolateCake extends Expirable {}
interface FruitCake extends Expirable {}

const chocoCake: ChocolateCake[] = [{ expiryDate: new Date() }];
const fruitCake: FruitCake[] = [{ expiryDate: new Date() }];

interface getExpiredItemsFunction {
	<Item extends Expirable>(items: Array<Item>): Array<Item>;
}

const getExpiredItems: getExpiredItemsFunction = items => {
	const currentDate = new Date().getTime();
	return items.filter(cake => cake.expiryDate.getTime() < currentDate);
};

const expiredChokoCakes = getExpiredItems<ChocolateCake>(chocoCake);
const expiredFruitCakes = getExpiredItems<FruitCake>(fruitCake);

interface ShoppingCart<ItemId, Item> {
	items: Array<Item>;
	addItem(this: ShoppingCart<ItemId, Item>, item: Item): void;
	getItem(this: ShoppingCart<ItemId, Item>, itemId: ItemId): Item | undefined;
}

interface Item {
	price: number;
	id: number;
}

const cart: ShoppingCart<number, Item> = {
	items: [],
	addItem(item) {
		this.items.push(item);
	},
	getItem(id) {
		return this.items.find(e => e.id === id);
	},
};
