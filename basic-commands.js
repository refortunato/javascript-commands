//Números e math
console.log('Máximo inteiro', Number.MAX_SAFE_INTEGER);
console.log('Mínimo inteiro', Number.MIN_SAFE_INTEGER);
console.log('5 É inteiro ?', Number.isInteger(5));
console.log('Verifica se o retorno é NaN. Se for texto ou númerico retornará false.', Number.isNaN('teste'));
console.log('isNaN global sim, retorna false para texto', isNaN('teste'));
console.log('Limitar casas decimais =>', 1.57856.toFixed(2));
console.log('');
console.log('---classe Math---');
console.log('Potência: 2 elevado a 3 = ', Math.pow(2, 3) , ' ou poderia fazer 2 ** 3');
console.log('Raíz quadrada de 9 = ', Math.sqrt(9));
console.log('Valor absoluto ', Math.abs(-2));
console.log('Sempre arredondar números para cima Ex: 5.1 = ', Math.ceil(5.1));
console.log('Sempre arredondar números para baixo Ex: 5.1 = ', Math.floor(5.9));
console.log('Arredondar números Ex: 5.5 = ', Math.round(5.5));
console.log('Cortar casas decimais Ex: 5.5 = ', Math.trunc(5.5));
console.log('Número máximo Ex: (1, 9, 10, 8, 7, 6, 12, 11) = ', Math.max(1, 9, 10, 8, 7, 6, 12, 11));
console.log('Número mínimo Ex: (1, 9, 10, 8, 7, 6, 12, 11) = ', Math.min(1, 9, 10, 8, 7, 6, 12, 11));
// No caso acima poderia fazer spread de um array. Exemplo
var MyArray = [1,2,3,4,5,6];
console.log('valor máximo com spread de ['+MyArray+']: ', Math.max(...MyArray));
console.log('número aleatório (sempre entre 0 a 1, se quiser de 0 a 10 é só fazer * 10) ', Math.random());


//strings
console.log('');
console.log('---Strings---');
console.log('Tamanho da string . Ex: Hello World!', 'Hello World!'.length);
console.log('Posição de caracteres ou palavras . Ex: Hello World! pegar onde está o World', 'Hello World!'.indexOf('World'));
console.log('Última posição de um caracter ou palavra . Ex: Hello World! pegar o último "o" ', 'Hello World!'.lastIndexOf('o'));
console.log('Repetir a string', 'Hello World!, '.repeat(3));
console.log('Pegar parte de uma string. Ex: Hello World! : ', 'Hello World!'.substr(0/*Posição*/, 5/*tamanho */));
console.log('Pegar parte de uma string com substring. Ex: Hello World! : ', 'Hello World!'.substring(2/*Posição inicial*/, 4/*Posição Final*/));
console.log('String maiúsculas', 'Hello World!, '.toUpperCase());
console.log('String minúsculas', 'Hello World!, '.toLowerCase());
console.log('Remove espaços vazios à esquerda', ' Hello World!, '.trimLeft());
console.log('Remove espaços vazios à direita', ' Hello World!, '.trimRight());
console.log('Remove espaços vazios', ' Hello World!, '.trim());
console.log('distribuir strings em array', 'Hello World'.split(' '));


//Datas
console.log('');
console.log('---Datas---');
let myDate = new Date(); //data atual

let myDate1 = new Date('2019-11-20'); //Cria a data GMT. Neste caso entende-se que é 2019-11-20 às 00h e subtrai 3 horas para pegar o horário de SP
let myDate2 = new Date(2019, 9, 21); // format Y, m, d. O mês começa no 0.
console.log( "Mili segundos", myDate.getMilliseconds() );
console.log( "Segundos", myDate.getSeconds() );
console.log( "Minutos", myDate.getMinutes() );
console.log( "Horas", myDate.getHours() );
console.log( "Dia", myDate.getDate() );
console.log( "Mês", myDate.getMonth() );
console.log( "Mês", myDate.getMonth() );
console.log( "Ano", myDate.getYear() );
console.log( "Ano no formato yyyy", myDate.getFullYear() );
console.log( "Timestamp", myDate.getTime() );
console.log( "Formato JSON", myDate.toJSON());
let myDate3 = new Date("2019-11-21T19:53:37.357Z"); //Também pode ser setado dessa forma
//Também é possível setar datas
myDate.setMilliseconds(0) ;
myDate.setSeconds(0); 
myDate.setMinutes(0);
myDate.setHours(0); 
myDate.setDate(0);
myDate.setMonth(0);
myDate.setMonth(0);
myDate.setYear(0);
myDate.getFullYear(0);






