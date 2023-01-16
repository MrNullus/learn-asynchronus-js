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

```