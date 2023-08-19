

//Данные Data Данные Data Данные Data Данные Data Данные Data Данные Data Данные Data Данные Data Данные Data Данные Data Данные Data Данные Data Данные Data  Data Данные Data  Data Данные Data  Data Данные Data




//Давайте сделаем копию массива. Это делается с помощью специального метода, вот так:
<script>
let arr = [1, 2, 3, 4, 5];
let copy = Object.assign([], arr);

//Есть и второй подход - через деструктуризацию:
let copy = [...arr];
</script>


//Давайте сделаем копию объекта.
<script>
let obj = {a: 1, b: 2, c: 3};
//let copy = Object.assign({}, obj);

//Есть и второй подход - через деструктуризацию:
let copy = {...obj};
</script>


//иммутабельное добавление элементов в массив
<script>
let arr = [1, 2, 3, 4, 5];
let copy = Object.assign([], arr);
copy.push(6);
let res = copy;

//ИЛИ
let res2 = [...arr, 6];
</script>


//иммутабельное удаление элементов в массиве
<script>
let arr = [1, 2, 3, 4, 5];
let ind = 3; //номер для удаления

let copy = Object.assign([], arr);
copy.splice(ind, 1);
let res = copy;

//ИЛИ
let res = [
	...arr.slice(0, ind), //= 1, 2, 3,
	...arr.slice(ind + 1) //= 5
];
console.log(res);
console.log(arr);
</script>


//иммутабельное изменение элементов в массиве
<script>
let arr = [1, 2, 3, 4, 5];
let ind = 3; //номер для удаления

let copy = Object.assign([], arr);
copy[ind] = '!';
let res = copy;

//ИЛИ
let res = [
	...arr.slice(0, ind),
	'!',
	...arr.slice(ind + 1)
);
</script>


//массив объектов, у которого каждый элемент будет иметь некоторый случайный id
<script>
let arr = [
	{
		id: 'GYi9GauC4gBF1e2SixDvu',
		prop1: 'value11',
		prop2: 'value12',
		prop3: 'value13',
	},
	{
		id: 'IWSpfBPSV3SXgRF87uO74',
		prop1: 'value21',
		prop2: 'value22',
		prop3: 'value23',
	},
	{
		id: 'JAmjRlfQT8rLTm5tG2m1L',
		prop1: 'value31',
		prop2: 'value32',
		prop3: 'value33',
	},
];
</script>


//сделаем функцию, которая будет генерировать строку со случайным id:
<script>
function getId(length = 16) {
	let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

	let res = '';

	for (let i = 0; i < length; i++) {
		res += chars[Math.floor(Math.random() * chars.length)];
	}

	return res;
}
let id = getId();
console.log(id);
</script>


//Создадим копию массива и добавим в него новый элемент
<script>
let arr = [
	{
		id: 'GYi9GauC4gBF1e2SixDvu',
		prop1: 'value11',
		prop2: 'value12',
		prop3: 'value13',
	},
	{
		id: 'IWSpfBPSV3SXgRF87uO74',
		prop1: 'value21',
		prop2: 'value22',
		prop3: 'value23',
	},
	{
		id: 'JAmjRlfQT8rLTm5tG2m1L',
		prop1: 'value31',
		prop2: 'value32',
		prop3: 'value33',
	},
];

let newElem = {
	id: 'GMNCZnFT4rbBP6cirA0Ha',
	prop1: 'value41',
	prop2: 'value42',
	prop3: 'value43',
};

let copy = Object.assign([], arr);
copy.push(newElem);
let res = copy;
console.log(res);

//Либо воспользоваться деструктуризацией:
let res2 = [...arr, newElem];
</script>


//удалим элемент с таким id. Используем для этого метод filter:
<script>
let arr = [
	{
		id: 'GYi9GauC4gBF1e2SixDvu',
		prop1: 'value11',
		prop2: 'value12',
		prop3: 'value13',
	},
	{
		id: 'IWSpfBPSV3SXgRF87uO74',
		prop1: 'value21',
		prop2: 'value22',
		prop3: 'value23',
	},
	{
		id: 'JAmjRlfQT8rLTm5tG2m1L',
		prop1: 'value31',
		prop2: 'value32',
		prop3: 'value33',
	},
];

let id = 'IWSpfBPSV3SXgRF87uO74';

let res = arr.filter(elem => {
	if (elem.id !== id) {
		return elem;
	}
});

//Код можно упростить:
let res2 = arr.filter(elem => elem.id !== id);
</script>


//Изменение элемента по id
<script>
let arr = [
	{
		id: 'GYi9GauC4gBF1e2SixDvu',
		prop1: 'value11',
		prop2: 'value12',
		prop3: 'value13',
	},
	{
		id: 'IWSpfBPSV3SXgRF87uO74',
		prop1: 'value21',
		prop2: 'value22',
		prop3: 'value23',
	},
	{
		id: 'JAmjRlfQT8rLTm5tG2m1L',
		prop1: 'value31',
		prop2: 'value32',
		prop3: 'value33',
	},
];

let data = {
	id: 'IWSpfBPSV3SXgRF87uO74',
	prop1: 'value21 !',
	prop2: 'value22 !',
	prop3: 'value23 !',
};

let res = arr.map(elem => {
	if (elem.id === data.id) {
		return data;
	} else {
		return elem;
	}
});

//Можно сократить код, воспользовавшись тернарным оператором:
let res2 = arr.map(elem => elem.id === data.id ? data : elem);
</script>


//Изменение одного свойства по id
<script>
let arr = [
	{
		id: 'GYi9GauC4gBF1e2SixDvu',
		prop1: 'value11',
		prop2: 'value12',
		prop3: 'value13',
	},
	{
		id: 'IWSpfBPSV3SXgRF87uO74',
		prop1: 'value21',
		prop2: 'value22',
		prop3: 'value23',
	},
	{
		id: 'JAmjRlfQT8rLTm5tG2m1L',
		prop1: 'value31',
		prop2: 'value32',
		prop3: 'value33',
	},
];

let data = {
	id: 'IWSpfBPSV3SXgRF87uO74',
	prop1: 'value21 !',
	prop2: 'value22 !',
	prop3: 'value23 !',
};

let id = 'IWSpfBPSV3SXgRF87uO74';
let prop = 'prop1';
let value = '!!!';

let res = arr.map(elem => {
	if (elem.id === id) {
		return {...elem, [prop]: value};
	} else {
		return elem;
	}
});
console.log(res);
</script>


//получить элемент массива по его id.
<script>
let arr = [
	{
		id: 'GYi9GauC4gBF1e2SixDvu',
		prop1: 'value11',
		prop2: 'value12',
		prop3: 'value13',
	},
	{
		id: 'IWSpfBPSV3SXgRF87uO74',
		prop1: 'value21',
		prop2: 'value22',
		prop3: 'value23',
	},
	{
		id: 'JAmjRlfQT8rLTm5tG2m1L',
		prop1: 'value31',
		prop2: 'value32',
		prop3: 'value33',
	},
];

let data = {
	id: 'IWSpfBPSV3SXgRF87uO74',
	prop1: 'value21 !',
	prop2: 'value22 !',
	prop3: 'value23 !',
};

let id = 'IWSpfBPSV3SXgRF87uO74';

let res = arr.find(elem => {
	if (elem.id === id) {
		return true;
	} else {
		return false;
	}
});

//Код можно сократить:
let res = arr.find(elem => elem.id === id);
</script>
