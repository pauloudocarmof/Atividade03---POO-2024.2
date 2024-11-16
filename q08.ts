const numeros = [1, 2, 3, 4];
const dobrados = numeros.map((num) => num * 2);   
const somaTotal = numeros.reduce((acc, num) => acc + num, 0); 
console.log(dobrados);  
console.log(somaTotal); 
