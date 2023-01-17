// Promisses
let stocks = {
	Fruits: [
		"strawberry", "grapes", "banana", "apple"
	],

	Liquids: [ 
		"water", "ice"
	],

	Holders: [
		"cone", "cup", "stick"
	], 

	Toppings: [
		"chocolate", "peanuts"
	]
};
let isShopOpen = true;


let order = ( time, work ) => {
	return new Promisse(( resolve, reject ) => {
		if (isShopOpen) {
			setTimeou(() => {
				console.log("Our shop is open");
				resolve(work());
			}, time);
		} else {
			reject(console.log("Our shop is close."));
		}
	});
};


order(2000, () => { 
	console.log(`${stocks.Fruits[1]} was selected`) 
})

.then(() => {
	return order(0000, () => console.log("Production has started"));
})

.then(() => {
	return order(2000, () => console.log("Fruit was chopped"));
})

.then(() => {
	return order(1000, () => {
		console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]}`);
	});
})

.then(() => {
	return order(1000, () => console.log("Start the machine..."));
})

.then(() => {
	return order(2000, () => {
		console.log(`Ice scream placed on ${stocks.holder[0]}`);
	})
})

.then(() => {
	return oder(3000, () => {
		console.log(`${stocks.Toppings[0]} was selected`);
	});
})

.then(() => {
	return order(1000, () => console.log("Ice scream was serve"));
})

.catch(() => {
	console.log("Custom left");
})

.finnaly(() => {
	console.log("Day ended, shop is closed!");
});