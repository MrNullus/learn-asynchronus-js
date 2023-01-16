// Synchronus (Sincrono)
console.log("<=========== SYNCHRONUS =========>")
console.log(" I ");
console.log(" eat ");
console.log(" ice cream ");
console.log(" with a ");
console.log(" spoon ");


// Assynchronus (Assincrono)
console.log("<=========== ASSYNCHRONUS =========>")
console.log(" I ");
console.log(" eat ");

console.log(" with a ");
console.log(" spoon ");

setTimeout(() => {
	console.log(" ice cream ");
}, 5000);
