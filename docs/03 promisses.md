# Learn Asynchronus JavaScript

## Promisses 
Promisses são promessas que são feitas, para entende-las vamos entender seu ciclo:

```diff
	Promisse é feita (prometo a você servir pizza)
										| 	
									Pending
                /         \
							 /		       \
							/  			  	  \
						 /      		  	 \
						/        			    \
	Resolve	</	       		   	   \> Reject
(aceitou a promessa)     (rejeitou a promessa)
      	 |  											 |
  	     |							  				 |
  	     |											   |
  	     |												 |
  	     /												 \ 
      .then() (então)            .catch() (obter erro)
      	 |													|
      	  \   										  /
      	   \                       /
      	    \											/
      	     \----> finally <----/
```

- Exemplo de código:

```js
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

.catch(() => {
	console.log("Custom left");
})

.finnaly(() => {
	console.log("Day ended, shop is closed!");
});
```
