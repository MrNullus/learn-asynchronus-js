// Callbacks
console.log("<=========== CALLBACKS =========>")
const steps = (stepOne, stepTwo) => {
	console.log("~ This is steps);

	console.log("|> Call step one...");
	console.log(stepOne());

	console.log("|> Call step two...");
	console.log(stepTwo());

	console.log("----------------------");
};

const stepOne() {
	console.log("STEP ONE");
};
const stepTwo() {
	console.log("STEP TWO")
};

steps(stepOne, stepTwo);

//  ------
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
console.log("STOCKS =====> ", stocks;


let order = (fruit_name, call_production) => {
	setTimeout(() => {
		console.log(`${stocks.Fruit[fruit_name]} was selected`);

		call_production();
	}, 2000);
};

let production = () => {
	setTimeout(() => {
		console.log("Order received, starting production...");

		setTimeout(() => {
			console.log("The fruit has been chopped");

			setTimeout(() => {
				console.log(`${stocks.Liquid[0]} and ${sotcks.Liquids[1]} was added`);

				setTimeout(() => {
					console.log("The machine was started");

					setTimeout(() => {
						console.log(`ice dream was placed on ${stocks.Holders[0]}`);

						setTimeout(() => {
							console.log(`${stocks.Toppings[0]} was added as toppings`);

							setTimeout(() => {
								console.log("Serve ice scream");
							}, 2000);

						}, 3000);

					}, 2000);

				}, 1000);

			}, 1000);

		}, 2000);

	}, 0000);
};

order(0, production);
