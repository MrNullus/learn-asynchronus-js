# Learn Asynchronus JavaScript

## Sync vs Async
O JavaScript consegue funcionar de duas formas elementarmente: sincrono e assincrono.

### Sincrono
Quando se trata de sincrono, ou seja, sincronismo é de modo claro ter um fluxo de 1 por 1.

Assim sendo, pense que um navegador recebeu a requisição para pegar 3 imagens o JS irá capturar uma resposta dessa request e de modo  sincrono só mostrara 1 imagem por vez.

```diff
		 [ Request ]													Browser	
																					  |___________
imagem 1      imagem 2      imagem 3        |          |
-------->>    -------->>    -------->>      |    UI    | 
																					  |	         |
<------------------------------------------>|__________| 
```

Ao olharmos isso, teremos de modo claro o que é o sincronismo: "Em fila indiana, uma tarefa por vez". Onde uma tarefa deve ser concluida para que a outra seja iniciada.

<br>

### Assincrono 
Agora, que se entendeu o que é o "sincronismo" deve se já imaginar do que se trata o "assincronismo". Algo que não é sincrono, então, assincrono é o fluxo em que as tarefas são independentes logo elas funcinam separadamente.

Vamos pegar o exemplo anterior:

```diff
		 [ Request ]													
																	
imagem 1            										 Browser	
-------->>   																|----------| 	
   						imagem 2											|					 |
							-------->>     								| 				 |	
														imagem 3		    |					 |
														-------->>      |    UI    | 
																					  |	         |
<------------------------------------------>|__________| 
```

Percebe-se que há diferenças claras no modo de funcionamento como as diferentes filas para cada imagem, ou seja, cada foto está sendo carregada de modo independente. Sendo assim, o conceito de 1 por 1 não existem nesse fluxo, seria muito mais: "Cada um no seu pedaço", ou mesmo; "10 tarefas para 10 mãos, cada mão para uma tarefa o que acontecer com uma não interfere na outra e nem impede ela".
