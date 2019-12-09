var myArray = [2, 4, 6, 7, 8, 9, 10];
console.log("---Array---");
console.log(myArray, "Tamanho: ", myArray.length);

//Every
//Percorre todos os elementos do array verificando se todos estão dentro de uma condição, se um não estiver, então retorna false.
myArray.every(function(n){
  //console.log( n % 2 === 0)  ;
  return n % 2 === 0;
});

//Filter
let impar  = myArray.filter( n => n % 2 !== 0); //Filtra o array em uma determinada condição e retorna apenas os dados verdadeiros
console.log("numeros ímpares", impar);

//Find
let found = myArray.find(n => n > 5); //Percorre o array e retorna apenas o primeiro dado verdadeiro
console.log("Maiores que 5: ", found);

//FindIndex
let found_index = myArray.findIndex(n => n > 5); //Percorre o array e retorna apenas o índice do primeiro dado verdadeiro
console.log("index maior que 5: ", found_index);

//Some
let some = myArray.some( n => n % 2 !== 0 ); //Percorre o array e retorna true se pelo menos algum elemento entrou na condição;
console.log("Tem ímpar ? ", some);

//Reduce
let reduce = myArray.reduce( (acumulado, atual) => acumulado + atual ); // percorre o array e consegue guardar e recuperar um valor a cada elemento. Neste caso está somando
console.log("Soma: ", reduce);

//Sort
let sort = myArray.sort(); //Ordena convertendo cada valor para string
let sort_converted = myArray.sort( (a,b) => a > b ? 1 : -1); //Ordena de forma crescente