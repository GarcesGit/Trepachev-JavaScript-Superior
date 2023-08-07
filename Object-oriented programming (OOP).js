
// ООП  ООП  ООП  ООП  ООП  ООП  ООП  ООП  ООП  ООП  ООП  ООП  ООП  ООП  ООП  ООП  ООП  ООП  ООП  ООП  ООП  ООП  ООП  ООП  ООП  ООП  ООП




//С помощью команды new можно создать объект этого класса:
<script>
class User {
}
let user = new User;
console.log(user); //User {}[[Prototype]]: Object

</script>


//Давайте запишем некоторые данные в свойства нашего объекта:
<script>
class User {
}
let user = new User;

user.name = 'john'; //свойство + данные
user.surn = 'smit';

console.log(user.name);
console.log(user.surn);

</script>


//Можно создавать несколько объектов одного класса. К примеру, создадим двух юзеров:
<script>
let user1 = new User;
let user2 = new User;

user1.name = 'john';
user2.name = 'eric';

console.log(user1.name);
console.log(user2.name);

</script>


//В классах также можно делать методы.
<script>
class User {
show() {
  return "+++";
}
}
let user = new User;
console.log(user.show()); //	'+++'

</script>


//Методы могут принимать параметры.
<script>
class User {
show(name, surn) {
  return name + ' ' + surn;
}
}
let user = new User;
console.log(user.show('john', 'smit')); //john smit

</script>


//Внутри методов класса this будет указывать на объект этого класса:
<script>
class User {
	show() {
		console.log(this.name); // объект
	}
}
let user = new User;
user.name = 'john';

user.show(); // выведет 'john'

</script>


//Одни методы можно вызывать внутри других через this.
<script>
class User {
	show() {
		return this.cape(this.name);
	}

	cape(str) {
		return str[0].toUpperCase() + str.slice(1);
	}
}

let user = new User;
user.name = 'john';

console.log(user.show()); // John

</script>


//В начале класса можно объявлять то, какие свойства будут у этого класса.
<script>
class User {
	name = 'john'; //свойство + данные

	show() { // метод
		return this.name;
	}
}

let user = new User; //объект нашего класса

console.log(user.name); // 'john'

</script>


//метод constructor будет вызываться в момент создания нового объекта класса.
//В конструктор можно передавать параметры.
<script>
class User {
  constructor(name, surn) {
  		console.log(name + ' ' + surn);
	}
}

new User('john', 'smit');

</script>


//Переменные, переданные через параметры конструктора, можно записать в свойства объекта:
//Переданные значения станут доступны во всех методах класса.
<script>
class User {
	constructor(name, surn) {
		this.name = name;
		this.surn = surn;
	}

	show() {
		return this.name + ' ' + this.surn;
	}
}
let user = new User('john', 'smit');
console.log(user.show());

</script>


//Существуют также приватные свойства, которые будут доступны только внутри класса.
<script>
class User {
	#name; //приватное свойство объявить в начале кода класса

	constructor(name) {
		this.#name = name; //запишем данные в наше свойство
	}

	show() { //Сделаем метод, который будет
		return this.#name; //возвращать значение нашего свойства
	}
}
let user = new User('john'); //Создадим объект класса, передав параметром имя юзера

console.log(user.show());//вызов нашего метода позволит прочитать это свойство

</script>


//Приватными могут быть не только свойства, но и методы.
<script>
class User {
	#name;

	constructor(name) {
		this.#name = name;
	}

	show() {
		return this.#cape(this.#name); //Воспользуемся нашим вспомогательным методом внутри другого метода
	}
  #cape(str) { //Сделаем в этом классе приватный метод
  return str[0].toUpperCase() + str.slice(1);
  }
}
let user = new User('john'); //Создадим объект класса

console.log(user.show()); //Вызовем публичный метод, использующий вспомогательный

</script>


//сделайте вспомогательный метод приватным
<script>
class Employee {

	constructor(name, salary) {
		this.name = name;
		this.salary = salary;
	}

	getSalary() {
		return this.#addSign(this.salary);
	}

	#addSign(num) {
		return num + '$';
	}
}
let employee = new Employee('john', 1000);
console.log(employee.getSalary());

</script>


//Приватность в старом стиле в ООП
<script>
class User {
	constructor(name) {
		this._name = name;
	}

	show() {
		return this._name;
	}
}

let user = new User('john', 'smit');
console.log(user._name);

</script>


//сделаем геттеры наших свойств:
<script>
class User {
	#name;
	#surn;

	constructor(name, surn) {
		this.#name = name;
		this.#surn = surn;
	}

getName() {
		return this.#name;
	}

	getSurn() {
		return this.#surn;
	}
}
let user = new User('john', 'smit');

console.log(user.getName());
console.log(user.getSurn());

</script>


//Давайте сделаем сеттеры свойств:
<script>
class User {
	#name;
	#surn;

	setName(name) {
		this.#name = name;
	}
	setSurn(surn) {
		this.#surn = surn;
	}

	getName() {
		return this.#name;
	}
	getSurn() {
		return this.#surn;
	}
}

let user = new User;

user.setName('john'); //С помощью сеттеров установим значения свойств:
user.setSurn('smit');

console.log(user.getName()); //С помощью геттеров выведем значения свойств:
console.log(user.getSurn());

</script>


//преимущество: перед обращением к свойству можно выполнять некоторые проверки.
<script>
class User {
	#name;
	#surn;

	setName(name) {
		if (name.length > 0) {
			this.#name = name;
		} else {
			throw new Error('name is incorrect');
		}
	}
	setSurn(surn) {
		if (surn.length > 0) {
			this.#surn = surn;
		} else {
			throw new Error('surn is incorrect');
		}
	}
	getName() {
		return this.#name;
	}
	getSurn() {
		return this.#surn;
	}
}

let user = new User;

//user.setName('john');
user.setName('');

console.log(user.getName()); //caught Error: name is incorrect

</script>


//методы можно  вызывать друг за другом цепочкой.
<script>
class User {
	#name;
	#surn;

	setName(name) {
		this.#name = name;
		return this;
	}
	setSurn(surn) {
		this.#surn = surn;
		return this;
	}

	getName() {
		return this.#name;
	}
	getSurn() {
		return this.#surn;
	}
}
let user = new User;

user.setName('john').setSurn('smit'); //Вызовем наши сеттеры цепочкой

console.log(user.getName());
console.log(user.getSurn());

</script>


//сравниваются переменные, содержащие объекты
<script>
class User { //есть следующий класс
	constructor(name) {
		this.name = name;
	}
}
let user1 = new User('1');//Создадим два объекта этого класса
let user2 = new User('2');

//Сравним переменные, содержащие ссылку на один и тот же объект:
console.log(user1 === user1); // true

// Сравним переменные, содержащие ссылку на разные объекты:
console.log(user1 === user2); // 	false

</script>


//сравниваются переменные, содержащие объекты
<script>
class Employee {
	constructor(name) {
		this.name = name;
	}
}

let emp1 = new Employee('john');
let emp2 = new Employee('john');

console.log(emp1 === emp2); //false ????

</script>


//Оператор instanceof проверяет принадлежит ли объект этому классу.
<script>
class User {

}
let user = new User;

console.log(user instanceof User); // true

</script>


//Переберите циклом массив объектов и выведите в консоль только имена работников.
<script>
class Student {
	constructor(name) {
		this.name = name;
	}
}
class Employee {
	constructor(name) {
		this.name = name;
	}
}

let users = [
	new Student('user1'),
	new Employee('user2'),
	new Student('user3'),
	new Employee('user4'),
	new Student('user5'),
	new Employee('user6'),
	new Student('user7'),
];

for (let man of users){
  if (man instanceof Employee){
    console.log(man.name);
  }
}
//user2 user4 user6

</script>


//Сделаем класс, который будет манипулировать массивами чисел:
<script>
class ArrHelper {

	getSum(arr) { //метод класса ArrHelper
		let res = 0;

		for (let num of arr) {
			res += num;
		}

		return res;
	}

	getAvg(arr) { //метод класса ArrHelper
		if (arr.length > 0) {
			let sum = this.getSum(arr);
			return sum / arr.length;
		} else {
			return 0;
		}
	}
}

let arrHelper = new ArrHelper; //объект нашего класса

let sum1 = arrHelper.getSum([1, 2, 3]);
console.log(sum1);

let sum2 = arrHelper.getSum([3, 4, 5]);
console.log(sum2);

</script>


//В классах можно использовать объекты других классов.
<script>
class City { //есть следующий класс для города
	constructor(name) {
		this.name = name;
	}
}

class User { //имя, фамилию и город передавать параметрами конструктора
	constructor(name, surn, city) {
		this.name = name;
		this.surn = surn;
		this.city = city;
	}
}

//имя и фамилия будут строками, а город - объектом отдельного класса
let city = new City('luis');
let user = new User('john', 'smit', city);

console.log(user.name);
console.log(user.city.name);

</script>


//Перебирите созданный массив циклом и выведите на экран имена
<script>
class User {
	#name;

	constructor(name) {
		this.#name = name;
	}
	getName() {
		return this.#name;
	}
}

let users = [ //Сделаем массив объектов этого класса:
	new User('john'),
	new User('eric'),
	new User('kyle'),
];

for (let user of users) {
	console.log(user.getName());
}
</script>


<script>
//Манипуляция объектами в классах в ООП

class User { //есть следующий класс:
	#name;

	constructor(name) {
		this.#name = name;
	}
	getName() {
		return this.#name;
	}
}

  class UsersCollection { //сделать класс, который будет манипулировать набором объектов с юзерами:
  	#users;

  	constructor() { //Будем хранить объекты с юзерами в виде массива в приватном свойстве:
  		this.#users = [];
  	}

    add(user) { //Сделаем метод для добавления нового юзера в массив:
  		this.#users.push(user);
  	}

    show() { //сделаем метод, который выведет в консоль имена всех юзеров:
		for (let user of this.#users) {
			console.log(user.getName());
		}
  }
}

let uc = new UsersCollection;// cоздадим объект класса

uc.add(new User('john')); //добавим в нашу коллекцию несколько юзеров:
uc.add(new User('eric'));
uc.add(new User('kyle'));

uc.show(); //вызовем метод, который выведет в консоль имена всех юзеров:

</script>


//DOM элементы также представляют собой объекты встроенных классов.
<p>text</p>
<script>
let elem = document.querySelector('p');
console.log(elem instanceof HTMLParagraphElement);
	// true

</script>


//cделаем так, чтобы класс-потомок унаследовал методы и свойства своего родителя.
<script>
class User {
}
class Student {
}

class Student extends User {
}
</script>


//Класс-потомок наследует все публичные методы родителей.
<script>
class User { //есть класс со следующими методами:
	setName(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}
}

class Student extends User {// Пусть от этого класса наследует следующий класс:
}
let student = new Student; //Создадим новый объект со студентом:
student.setName('john'); //Установим ему имя с помощью унаследованного метода:

let name = student.getName();//Прочитаем его имя с помощью унаследованного метода:
console.log(name);

</script>


//Класс-потомок может иметь свои методы
<script>
class User {
	setName(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}
}

class Student extends User { // Методы потомка:
  setYear(year) {
		this.year = year;
	}
  	getYear() {
		return this.year;
	}
}
let student = new Student;
student.setName('john');
student.setYear(1);

let name = student.getName();
let year = student.getYear();

console.log(name, year);

</script>


//Переопределение методов родителя
<script>
class User {
	setName(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}
}

class Student extends User { //Давайте в классе-потомке создадим одноименный метод:
  setName(name) { //добавим проверку длины имени:
		if (name.length > 0) {
			this.name = name;
		} else {
			throw new Error('student name error');
		}
	}
}

let student = new Student; //создадим объект класса потомка
student.setName('john'); //вызовем наш метод, передав в него корректное значение
student.setName(''); // вызовем метод, передав в него некорректное значение.

</script>


//Вызов переопределенного метода
<script>

class User {
	setName(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}
}

class Student extends User {
	setName(name) { //классе-потомке переопределили метод родителя
		if (name.length > 0) {
      super.setName(name); // метод родителя
    } else {
			throw new Error('student name error');
		}
	}
}
</script>


//При наследовании можно переопределять конструктор родителя.
<script>
class User {
	constructor(name, surn) {
		this.name = name;
		this.surn = surn;
	}

	getName() {
		return this.name;
	}
	getSurn() {
		return this.surn;
	}
}

class Student extends User { // в классе-потомке расширить конструктор
	constructor(name, surn, year) {//обязательно нужно первой строкой вызвать конструктор родителя через super
  super(name, surn);  //передадим в него требуемые параметры
  this.year = year; //в потомке год обучения запишем в свое свойство потомка
	}

	getYear() {//Сделаем геттер для года обучения
		return this.year;
	}
}
</script>


//Приватные методы не наследуются.
<script>
class User {
	setName(name) {
		this.name = name;
	}
	getName() {
		return this.#capeFirst(this.name);
	}

	#capeFirst(str) {
		return str[0].toUpperCase() + str.slice(1);
	}
}

class Student extends User {//от родительского класса наследует следующий класс
	setSurn(surn) {
		this.surn = surn;
	}
	getSurn() {
    return this.#capeFirst(this.surn); // будет ошибка
	}
}
</script>


//Приватные свойства не наследуются.
<script>
class User {
	#name;

	setName(name) {
		this.#name = name;
	}
	getName() {
		return this.#name;
	}
}

class Student extends User {

}
let student = new Student;
student.setName('john');

//Воспользуемся методом родителя, чтобы прочитать его приватное свойство:
let name = student.getName();
console.log(name);

</script>


//Проблема приватных свойств при наследовании
<script>
class User {
	#age;

	setAge(age) {
		this.#age = age;
	}
	getAge() {
		return this.#age;
	}
}

//Ошибка исчезнет, если в классе-потомке объявить приватное свойство #age
//мы породили два приватных свойства: одно в родителе и одно в потомке.
class Student extends User {
	#age;

	incAge() {
		this.#age++;
	}
}

//нужно манипулировать приватными свойствами родителя через методы этого родителя:
/*
class Student extends User {
	incAge() {
		let age = this.getAge();
		age++;
		this.setAge(age);
	}
}
*/
</script>


//Защищенные методы в ООП
<script>
class User {
	setName(name) {
		this.name = name;
	}
	getName() {
		return this._capeFirst(this.name);
	}

	_capeFirst(str) { // класс-родитель с защищенным методом
		return str[0].toUpperCase() + str.slice(1);
	}
}
//Воспользуемся этим защищенным методом в классе-потомке:
class Student extends User {
	setSurn(surn) {
		this.surn = surn;
	}
	getSurn() {
		return this._capeFirst(this.surn);
	}
}
</script>


//Защищенные свойства в ООП
<script>
class User { //класс-родитель с защищенным свойством
	setAge(age) {
		this._age = age;
	}
	getAge() {
		return this._age;
	}
}

class Student extends User {//В классе потомке сделаем метод
	incAge() {
		this._age++;
	}
}
</script>


//Можно выполнять наследования от класса, который сам является потомком.
<script>
class User { //есть следующий класс-родитель:
	setName(name) {
		this._name = name;
	}
	getName() {
		return this._name;
	}
}

class Student extends User {//От этого класса наследует следующий класс:
	setYear(year) {
		this._year = year;
	}
	getYear() {
		return this._year;
	}
}

class StudentProgrammer extends Student { //А от этого класса наследует еще один класс:
	setSkill(skill) {
		this._skill = skill;
	}
	getSkill() {
		return this._skill;
	}
}
</script>


//Можно исправить проблему потери контекста, введя стрелочную функцию:
<script>
class User {
	constructor(name, cities) {
		this.name = name;
		this.cities = cities;
	}

	showCities() {
		this.cities.forEach(city => {
			console.log(this.#cape(city)); // контекст потеряется без стрелочной
		});
	}

	#cape(str) {
		return str[0].toUpperCase() + str.slice(1);
	}
}
</script>


//Можно получить исходный код метода класса
<script>
class User {
	#name;

	constructor(name) {
		this.#name = name;
	}
	getName() {
		return this.#name;
	}
}

let user = new User('john');

console.log(user.getName); //Выведем исходный код метода

</script>


//При использовании исходного кода метода класса может потеряться контекст.
<script>
class User {
	#name;

	constructor(name) {
		this.#name = name;
	}
	getName() {
		return this.#name;
	}
}//Создадим объект этого класса:
let user = new User('john');

//Для решения проблемы можно привязать контекст к функции через bind:
func = func.bind(user);
console.log(func());

</script>


//Могут быть и анонимные классы.
//Можно исходный код класса записать в переменную:
<script>
let ArrHelper = class {
	getSum(arr) {

	}
	getAvg(arr) {

	}
}
</script>


//Можно сразу создать объект класса:
<script>
let arrHelper = new class {
	getSum(arr) {

	}
	getAvg(arr) {

	}
}
</script>


//имя файла модуля должно соответствовать имени хранимого класса.
<script>
export default class User {
	#name;

	constructor(name) {
		this.#name = name;
	}
	getName() {
		return this.#name;
	}
}

//В файле index.js импортируем наш класс:
import User from './User.js';

let user = new User('john');

</script>


//Давайте посмотрим, как наследовать классы, размещенные в модулях.
<script>
export default class User {

}
//Пусть от этого класса мы будем наследовать другой класс:
export default class Student extends
	User {

}
//В этом случае к классу-потомку нужно подключить класс-родитель:
import User from './User.js';

export default class Student extends
	User {

}
</script>


//Свойства-аксессоры создаются с помощью ключевых слов get и set написанных при объявлении методов:
<script>
class User {
	get name() {

	}
	set name() {

	}
}

let name = user.name;
user.name = 'john';

</script>


//сделаем в этом классе публичное свойство name, которое можно будет прочитать, но нельзя будет записать
<script>
class User {//есть следующий класс с приватным свойством:
	#name;

	constructor(name) {
		this.#name = name;
	}

	get name() { //сделаем в этом классе публичное свойство
		return this.#name;
	}
}

let user = new User('john');//Создадим объект нашего класса

let name = user.name; //прочитаем имя через публичное свойство
console.log(name);

user.name = 'eric';//попытка записать имя приведет к ошибке

</script>


//сделаем еще и сеттер аксессора:
<script>
class User {
	#name;

	set name(name) { //Добавим теперь проверку в сеттере:
		if (name.length > 0) {
			this.#name = name;
		} else {
			throw new Error('name is incorrect');
		}
	}
	get name() {
		return this.#name;
	}
}

let user = new User;
user.name = 'john';

user.name = '';//Попробуем записать некорректную строку и получим ошибку

</script>


//С помощью аксессоров можно создавать мнимые свойства
<script>
class User {
	constructor(name, surn) {
		this.name = name;
		this.surn = surn;
	}

	get full() { //Создадим мнимое свойство-аксессор
		return this.name + ' ' + this.surn;
	}
}

let user = new User('john', 'smit');
console.log(user.name); // 'john'
console.log(user.surn); // 'smit
console.log(user.full); // 'john smit'

</script>


//Реализуем сеттер мнимого свойства full:
<script>
class User {
	constructor(name, surn) {
		this.name = name;
		this.surn = surn;
	}

	get full() {
		return this.name + ' ' + this.surn;
	}

	set full(full) {
		let [name, surn] = full.split(' ');

		this.name = name;
		this.surn = surn;
	}
}

let user = new User('john', 'smit');

user.full = 'eric jons';//Запишем данные в наш мнимый сеттер:

console.log(user.name); // 'eric'
console.log(user.surn); // 'jons'
console.log(user.full); // 'eric jons'

</script>




//Класс Circle в ООП. Вычисления круга
<script>
class Circle {
  #radius;

  constructor(radius) {
		this.#radius = radius;
	}

  showRadius() {
    return this.#radius;
  }
  showSquare() {
    return this.#radius **2 * 3.14;
  }
  showLength() {
    return this.#radius * 3.14 *2;
  }
}

let circle = new Circle (3);

console.log(circle.showRadius());
console.log(circle.showSquare());//28.26
console.log(circle.showLength());//18.84

</script>


//Класс Rectangle в ООП. Вычисления прямоугольника
<script>
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  getSquare() {
    return this.length * this.width;
  }
  getPerimeter() {
    return (this.length + this.width) *2;
  }
  getRatio() {
    return this.getSquare() / this.getPerimeter();
  }
}

let rectangle = new Rectangle(3, 2);

console.log(rectangle.getSquare());//6
console.log(rectangle.getPerimeter());//10
console.log(rectangle.getRatio());//0.6

</script>
