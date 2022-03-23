const chocoCake = [{ expiryDate: new Date() }];
const fruitCake = [{ expiryDate: new Date() }];
const getExpiredItems = items => {
    const currentDate = new Date().getTime();
    return items.filter(cake => cake.expiryDate.getTime() < currentDate);
};
const expiredChokoCakes = getExpiredItems(chocoCake);
const expiredFruitCakes = getExpiredItems(fruitCake);
const cart = {
    items: [],
    addItem(item) {
        this.items.push(item);
    },
    getItem(id) {
        return this.items.find(e => e.id === id);
    },
};
