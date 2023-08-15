

//Оптимизация кода Оптимизация кода Оптимизация кода Оптимизация кода Оптимизация кода Оптимизация кода Оптимизация кода Оптимизация кода




//проверить, заканчивается ли путь на расширение .png или .jpg.
<script>
let path = 'img.png';

if (path.slice(-4) === '.png' ||
	path.slice(-4) === '.jpg') {
	console.log('+++');
} else {
	console.log('---');
} //не оптимально
</script>

//Для оптимизации нужно выполнить отрезание строки один раз, записать результат в переменную, а затем использовать эту переменную
<script>
let path = 'img.png';
let ext  = path.slice(-4);

if (ext === '.png' || ext ===
	'.jpg') {
	console.log('+++');
} else {
	console.log('---');
}
</script>


<script>
let num = 123;
// НЕ ОПТИМАЛЬНО if (String(num)[0] === '1' || String(num)[0] === '2') {

let string = String(num);
if (string[0] === '1' || string[0] === '2') {
	console.log('+++');
} else {
	console.log('---');
}
</script>


<script>
let date = new Date();
// НЕ ОПТИМАЛЬНО if (date.getDay() === 0 || date.getDay() === 6) {

let weekDay = date.getDay();
if (weekDay === 0 || weekDay === 6) {
	console.log('выходной');
} else {
	console.log('рабочий');
}
</script>


<script>
let date = new Date();
let res;

/* НЕ ОПТИМАЛЬНО
if (date.getFullYear() >= 2020 && date.getFullYear() <= 2030) {
	res = 'год ' + date.getFullYear() + ' подходит';
} else {
	res = 'год ' + date.getFullYear() + ' не подходит';
}
*/

let year = date.getFullYear();
if (year >= 2020 && year <= 2030) {
	res = 'год ' + year + ' подходит';
} else {
	res = 'год ' + year + ' не подходит';
}
console.log(res);
</script>


<script>
//есть функция, которая находит делители числа:
function getDivisorsSum(num) {
	let res = 0;
		for (let i = 1; i <= num; i++) {
		if (num % i === 0) {
			res += i;
		}
	}
		return res;
}

/* эта функция достаточно "тяжелая". Поэтому плохой идеей будет написать вот такой код:
let num = 123456;
if (getDivisorsSum(num) >= 10 && getDivisorsSum(num) <= 100) {
	console.log('+++');
} else {
	console.log('---');
}
*/

//выполнить "тяжелую" операцию один раз и результат записать в переменную, а потом использовать эту переменную в нужных местах:
let num = 123456;
let sum = getDivisorsSum(num);

if (sum >= 10 && sum <= 100) {
	console.log('+++');
} else {
	console.log('---');
}
</script>


//Давайте найдем среднее от элементов этого массива.
<script>
let arr = [1, 2, 3, 4, 5, 6];

/* НЕ ОПТИМАЛЬНО
let avg  = 0;
for (let elem of arr) {
	avg += elem / arr.length;
}
*/

let sum = 0;
for (let elem of arr) {
	sum += elem;
}

let avg = sum / arr.length;
console.log(avg);
</script>


<script>
//Оптимизируем код, вовремя остановив цикл:
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let exists = false;

for (let elem of arr) {
	if (elem === 3) {
		exists = true;
		break;
	}
}
console.log(exists);
</script>


<script>
//сколько элементов массива нужно сложить, чтобы сумма стала больше 10. Выполните оптимизацию:
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
let i = 1;

for (let elem of arr) {
	sum += elem;

	while (sum <= 10) {
		i++;
		break;
	}
}
console.log(i);
</script>


<script>
//проверяет, есть ли в массиве число 3
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/* НЕ ОПТИМАЛЬНО
let exists = false;
for (let elem of arr) {
	if (elem === 3) {
		exists = true;
		break;
	}
}
console.log(exists);
*/
//встроенные в JavaScript функции всегда работают быстрее
console.log(arr.includes(3));

</script>


//Следующий код проверяет, начинается ли строка на 'http'. Выполните оптимизацию:
<script>
let str = 'http://code.mu';

/* НЕ ОПТИМАЛЬНО
if (str[0] + str[1] + str[2] + 	str[3] === 'http') {
	console.log('+++');
} else {
	console.log('---');
}
*/

let http = str.slice(0, 4);
if (http == 'http'){
	console.log('+++');
} else {
	console.log('---');
}
console.log(http);
</script>


//найти сумму целых чисел от 1 до 1000000
<script>
/* НЕ ОПТИМАЛЬНО
let sum = 0;
for (let i = 1; i <= 1000000; i++) {
	sum += i;
}
console.log(sum);
*/

let n = 1000000;
let sum = n * (n + 1) / 2;
console.log(sum);
</script>


//Как быстрее????
//Найдите количество чисел, делящихся без остатка на 5, из промежутка от 1 до 1000.
<script>
let nums = 0;
for (let i = 1; i <= 1000; i++) {
	if (i % 5 == 0){
		nums++;
	}
}
console.log(nums);
</script>


//Как быстрее????
//Найдите количество цифр, которое понадобится, чтобы записать все числа от 1 до 1000000.
<script>
let digits = 0;
for (let i = 1; i <= 1000000; i++) {
	let string = String(i);
	let split = string.split('');
		for (let j = 1; j <= split; j++) {
		}
		digits += split.length;
}
console.log(digits);
</script>


//проверить, начинается ли некоторая строка на восклицательный знак
<script>
/* НЕ ОПТИМАЛЬНО
let str = '!123';

if (/^!/.test(str)) {
	console.log('+++');
} else {
	console.log('---');
}
*/

let str = '!123';
if (str[0] == '!') {
	console.log('+++');
} else {
	console.log('---');
}
</script>


//проверить наличие в строке подстроки '33'
<script>
/* НЕ ОПТИМАЛЬНО
let str = '123345';

if (/33/.test(str)) {
	console.log('+++');
} else {
	console.log('---');
}
*/

let str = '123345';
let check = str.includes(33);
console.log(check);
</script>


//проверить заканчивается ли строка на '.html'
<script>
/* НЕ ОПТИМАЛЬНО
let str = 'index.html';

if (/\.html$/.test(str)) {
	console.log('+++');
} else {
	console.log('---');
}
*/

let str = 'index.html';
console.log(str.endsWith('.html'));
</script>


//код обрезает концевые пробелы.
<script>
/* НЕ ОПТИМАЛЬНО
let str = '  text  ';
let res = str.replace(/^\s+|\s+$/g, '');
console.log(res);
*/

let str = '  text  ';
console.log(str.trim());
</script>


//по потери фокуса проверим, что введенное число находится в заданном диапазоне:
<input>

<script>
/* НЕ ОПТИМАЛЬНО
let input = document.querySelector('input');

input.addEventListener('blur', function() {
	if (+input.value > 0 && +input.value <= 10) {
		console.log('+++');
	} else {
		console.log('---');
	}
});
*/

let input = document.querySelector('input');
input.addEventListener('blur', function() {
	let num = +input.value;

	if (num > 0 && num <= 10) {
		console.log('+++');
	} else {
		console.log('---');
	}
});
</script>


//код проверяет, что в инпут введена строка длиной в заданном диапазоне
<input data-min="5" data-max="10">

<script>
/* НЕ ОПТИМАЛЬНО
let inp = document.querySelector('input');

inp.addEventListener('blur', function() {
	console.log(inp.value.length);
	if (inp.dataset.min > inp.value.length || inp.dataset.max < inp.value.length) {
		console.log('+++');
	} else {
		console.log('---');
	}
});
*/

let inp = document.querySelector('input');
inp.addEventListener('blur', function() {
	let length = inp.value.length;
	if (inp.dataset.min > length || inp.dataset.max < length) {
		console.log('INCORRECT');
	} else {
		console.log('CORRECT');
	}
});
</script>


//найти сумму целых чисел от 1 до 100000000
<script>
/* НЕ ОПТИМАЛЬНО
function fillArr(a, b) {
	let res = [];
	for (let i = a; i <= b; i++) {
		res.push(i);
	}
	return res;
}

function getSum(arr) {
	let sum = 0;
	for (let elem of arr) {
		sum += elem
	}
	return sum;
}

let sum = getSum(fillArr(1, 100000000));
console.log(sum); //понадобится 1 гигабайт оперативной памяти
*/

function getNumsSum(max) {
	let sum = 0;
	for (let i = 1; i <= max; i++) {
		sum += i;
	}
	return sum;
}
let sum = getNumsSum(100000000);
console.log(sum); //понадобится 3 мегабайт оперативной памяти
</script>


//найти количество чисел, делящихся без остатка на 7, находящихся в заданном промежутке
<script>
/* НЕ ОПТИМАЛЬНО
let arr = [];

for (let i = 0; i <= 1000; i++) {
	if (i % 7 == 0) {
		arr.push(i);
	}
}

console.log(arr.length);
*/

let nums = 0;
for (let i = 0; i <= 1000; i++) {
	if (i % 7 == 0) {
		nums++;
	}
}
console.log(nums);
</script>


//не разбивать строку в массив, найти сумму цифр числа
<script>
/* НЕ ОПТИМАЛЬНО
let num = 123456789;
let arr = String(num).split('');
let sum = 0;

for (let elem of arr) {
	sum += +elem;
}

console.log(sum);
*/

let num = 123456789;
let str = String(num);
let sum = 0;
for (let char of str) {
	sum += +char;
}
console.log(sum);
</script>


//Следующий код проверяет наличие символа в строке. Выполните оптимизацию:
<script>
/* НЕ ОПТИМАЛЬНО
let str = 'abcaab';
let arr = str.split('');
console.log(arr.includes('a'));
*/

let str = 'abcaab';
console.log(str.includes('c'));
</script>


//Следующий код подсчитывает количество букв в строке. Выполните оптимизацию:
<script>
/* НЕ ОПТИМАЛЬНО
let str = 'abcaab';
let arr = str.split('');
let i = 0;
for (let elem of arr) {
	if (elem == 'a') {
		i++;
	}
}
console.log(i);
*/

let str = 'abcaab';
let i = 0;
for (let elem of str) {
	if (elem == 'b') {
		i++;
	}
}
console.log(i);
</script>


//Чрезмерно много обработчиков, навешанных на элементы съедают много оперативной памяти и приводят к подвисанию страницы.
<ul></ul>

<script>
let ul = document.querySelector('ul');
for (let i = 1; i <= 1000; i++) {
	let li = document.createElement('li');
	li.textContent = i;
	ul.append(li);
}
	/* НЕ ОПТИМАЛЬНО
	li.addEventListener('click', function() {
		console.log(this.textContent);
	});
}
В итоге получается, что у нас 1000 обработчиков. Это очень много.
*/

//Для оптимизации мы можем навесить только один обработчик на тег ul, воспользовавшись делегированием.
ul.addEventListener('click', function(event) {
	let li = event.target.closest('li');

	if (li) {
		console.log(li.textContent);
	}
});
</script>


//Создайте HTML таблицу размером 100 на 100. Сделайте так, чтобы каждая ячейка по клику красилась в красный цвет.
<table>

<script>
let table = document.querySelector('table');

for (let i = 1; i <= 100; i++) {
	let tr = document.createElement('tr');

  for (let i = 1; i <= 100; i++){
  	let td = document.createElement('td');
  	td.textContent = i;
  	tr.append(td);
}
    table.append(tr);
}

table.addEventListener('click', function(event) {
	let td = event.target.closest('td');

	if (td) {
		td.style.backgroundColor = 'red';
	}
});
</script>


//Следующий код находит дружественные числа в заданном промежутке:
<script>
/* НЕ ОПТИМАЛЬНО
для любого числа сумма его делителей будет найдена 9000 раз.

console.log(getFriendly(9000));

function getFriendly(range) {
	let res = [];
		for (let i = 1; i <= range; i++) {
		for (let j = 1; j < range; j++) {
			if (isFriendly(i, j)) {
				res.push([i, j]);
			}
		}
	}
		return res;
}

function isFriendly(num1, num2) {
	let sum1 = getSum(getOwnDivisors(num1));
	let sum2 = getSum(getOwnDivisors(num2));
		return sum1 == num2 && sum2 == 	num1;
}

function getOwnDivisors(num) {
	let res = [];
		for (let i = 1; i < num; i++) {
		if (num % i === 0) {
			res.push(i);
		}
	}
		return res;
}

function getSum(arr) {
	let sum = 0;
		for (let elem of arr) {
		sum += elem;
	}
		return sum;
}
*/

console.log(getFriendly(9000));

function getFriendly(range) {
	let sums = getAllSum(range);

	let res = [];

	for (let i = 0; i < sums.length; i++) {
		for (let j = i; j < sums.length; j++) {
			let sum1 = sums[i];
			let sum2 = sums[j];

			let num1 = i + 1;
			let num2 = j + 1;

			if (num1 == sum2 && num2 == sum1) {
				res.push([num1, num2]);
			}
		}
	}

	return res;
}

function getAllSum(range) {
	let arr = [];

	for (let i = 1; i <= range; i++) {
		arr.push(getOwnDivisorsSum(i));
	}

	return arr;
}

function getOwnDivisorsSum(num) {
	let sum = 0;

	for (let i = 1; i < num; i++) {
		if (num % i === 0) {
			sum += i;
		}
	}

	return sum;
}

</script>


//Следующий код находит взаимно-простые числа из заданного промежутка. Оптимизируйте его:
<script>
console.log(getRelativelyPrime(100));

function getRelativelyPrime(range) {
	let res = [];

	for (let i = 2; i <= range; i++) {
		for (let j = 2; j < range; j++) {
			if (isRelativelyPrime(i, j)) {
				res.push([i, j]);
			}
		}
	}

	return res;
}
function isRelativelyPrime(num1, num2) {
	let arr1 = getDivisors(num1);
	let arr2 = getDivisors(num2);
	let int  = getIntersect(arr1, arr2);

	if (int.length === 0) {
		return true;
	} else {
		return false;
	}
}
function getIntersect(arr1, arr2) {
	let result = [];

	for (let elem of arr1) {
		if (arr2.includes(elem)) {
			result.push(elem);
		}
	}

	return result;
}
function getDivisors(num) {
	let res = [];

	for (let i = 2; i <= num; i++) {
		if (num % i === 0) {
			res.push(i);
		}
	}

	return res;
}
</script>
