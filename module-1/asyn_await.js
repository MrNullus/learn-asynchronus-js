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


function time(ms)) {
	return new Promisse((resolve, reject) => {
			if (isShopOpen) {
				setTimeout(resolve, ms);
			} else {
				reject(console.log("shop is closed"));
			}
	});
)

async function kitchen() {
	try
	{
		await time(2000);
		console.log(`${stocks.Fuits[0]} was selected`);

		await time(0000);
		console.log("Kitchen started!!!!!!!!!!");

		await time(2000);
		console.log("cut the fruit");

		await time(1000);
		console.log(`${stocks.Liquids[0]} and ${stocks.Liquids[1]} was added`);

		await time(1000);
		console.log("Start the machine");

		await time(2000);
		console.log(`Ice cream placed on ${stocks.Holders[0]}`);

		await time(3000);
		console.log(`${stocks.Toppings[0]} was selected`);

		await time(2000);
		console.log(`Serve ice cream`);
	} 
	catch(err) 
	{ 
		console.log("Customer left... :(", error);
	} 
	finally 
	{
		console.log("Day ended, shop is closed");
	}
}
