<!DOCTYPE html>
<html>
	<head>
    <meta charset="utf-8">
    <title> ... </title>
  </head>
  <body>



		// Формат JSON Формат JSON Формат JSON Формат JSON Формат JSON Формат JSON Формат JSON Формат JSON Формат JSON Формат JSON Формат JSON Формат JSON Формат JSON Формат JSON Формат JSON Формат JSON Формат JSON Формат JSON Формат JSON




		<script>
		//Строка, содержащая массив в формате JSON.
		let arr = '[1, 2, 3, "a", "b", "c"]';
		</script>

		<script>
		//Строка, содержащая объект в формате JSON.
		let json = `{
			"a": "aaa",
			"b": "bbb",
			"c": "ccc",
			111: "ddd"
		}`;
		</script>


		<script>
		//Преобразуйте эту строку в настоящий массив JavaScript и найдите сумму чисел этого массива.
		let json = '[1, 2, 3, 4, 5]';
		let arr = JSON.parse(json);
		function sum(arr){
		  return arr.reduce(function(a,b) {
		    return a+b;
		  });
		}
		console.log(sum(arr));
		</script>


		<script>
		//ЗАДАЧА54
		//!!!! Дана строка в формате JSON, содержащая объект с данными: Найдите сумму чисел из представленных данных.
		let json = `{
			"data1": [1,2,3],
			"data2": [4,5,6],
			"data3": [7,8,9]
		}`;

		let jsObject = JSON.parse(json); //Преобразуем строку json в объект JS

		function getSum(object){
		let sum = 0;
		for (let elem in object){
		  if (typeof object[elem] == 'object') {
		    sum += getSum(object[elem]);
		  } else {
		    sum += object[elem];
		  }
		}
		return sum;
		}
		console.log(getSum (jsObject)); //45
		</script>


		<script>
		//!!!! Дана строка в формате JSON, содержащая имена юзеров: Выведите эти имена в виде списка ul.
		let json = '["user1","user2","user3","user4","user5"]';

		let jsObject = JSON.parse(json);

		for (let elem of jsObject) {
		let ul = document.createElement('ul');
		document.body.appendChild(ul);

		let li = document.createElement('li');
		li.textContent = elem;
		ul.appendChild(li);
		}
		</script>

		<script>
		//!!!!Дана строка в формате JSON, содержащая массив с данными работников: Выведите этих работников на экран в виде HTML таблицы.
		let json = `[
			{
				"name": "user1",
				"age": 25,
				"salary": 1000
			},
			{
				"name": "user2",
				"age": 26,
				"salary": 2000
			},
			{
				"name": "user3",
				"age": 27,
				"salary": 3000
			}
		]`;

		let jsObject = JSON.parse(json);

		for (let elem of jsObject) {
		let table = document.createElement('table');
		let tr = document.createElement('tr');

		let td1 = document.createElement('td');
		td1.textContent = elem.name;
		tr.appendChild(td1);

		let td2 = document.createElement('td');
		td2.textContent = elem.age;
		tr.appendChild(td2);

		let td3 = document.createElement('td');
		td3.textContent = elem.salary;
		tr.appendChild(td3);

		table.appendChild(tr);
		document.body.appendChild(table);
		}
		</script>

		<script>
		//Преобразуем наш массив в строку в формате JSON:
		let arr = [1, 2, 3, 4, 5, 'a', 'b']; 
		let json = JSON.stringify(arr);
		console.log(json); //[1,2,3,4,5,"a","b"]
		</script>

		<script>
		//Преобразуйте этот массив в формат JSON.
		let arr = ['user1', 'user2', 'user3', 'user4', 'user5'];
		let json = JSON.stringify(arr);
		console.log(json);//'["user1","user2","user3","user4","user5"]'
		</script>


		//Получите список городов в формате JSON.
		<ul>
			<li>city1</li>
			<li>city2</li>
			<li>city3</li>
			<li>city4</li>
		</ul>

		<script>
		let lis = document.querySelectorAll('li');
		let arr = [];
		for (let li of lis){
		  arr.push(li.innerHTML);
		}
		let json = JSON.stringify(arr);
		console.log(json);//'["city1","city2","city3","city4"]'
		</script>


		// ???? Получите представленные данные в формате JSON в виде объекта с ключами surname, name, patronymic.
		<table>
			<tr>
				<th>Фамилия</th>
				<th>Имя</th>
				<th>Отчество</th>
			</tr>
			<tr>
				<td>Иванов</td>
				<td>Иван</td>
				<td>Иванович</td>
			</tr>
			<tr>
				<td>Петров</td>
				<td>Петр</td>
				<td>Петрович</td>
			</tr>
			<tr>
				<td>Сидоров</td>
				<td>Сидр</td>
				<td>Сидорович</td>
			</tr>
		</table>

		<script>
		let ths = document.querySelectorAll('th');
		let tds = document.querySelectorAll('td');

		let columns = [];
		for (let th of ths){
			 columns.push(th.innerHTML);
			}

		let rows = [];
		for (let td of tds){
			 rows.push(td.innerHTML);
			}

			let obj = {};
			for (let i = 0; i <= columns.length; i++) {
			obj[columns[i]] = rows[i];

		}
			console.log(obj);
			//{Фамилия: 'Иванов', Имя: 'Иван', Отчество: 'Иванович', undefined: 'Петров'}
		/*
		let json = JSON.stringify(arr);
		console.log(json);
		*/
		</script>


		<script>
		//Давайте добавим в конец этого массива еще один элемент.
		let json = '[1, 2, 3, 4, 5]';

		let arr  = JSON.parse(json);
		arr.push(6);

		let res = JSON.stringify(arr);
		console.log(res); '[1,2,3,4,5,6]'
		</script>


		<script>
		//Поменяйте имя второго юзера.
		let json = '["user1","user2","user3","user4","user5"]';

		let arr  = JSON.parse(json);
		for (let elem of arr){
		  arr[1] = 'user!!!';
		}
		let res = JSON.stringify(arr);
		console.log(res); //["user1","user!!!","user3","user4","user5"]
		</script>


		<script>
		//Добавьте в эту строку еще одного работника.
		let json = `[
			{
				"name": "user1",
				"age": 25,
				"salary": 1000
			},
			{
				"name": "user2",
				"age": 26,
				"salary": 2000
			},
			{
				"name": "user3",
				"age": 27,
				"salary": 3000
			}
		]`;

		let arr  = JSON.parse(json);

		arr.push({
		  name: 'user40',
		  age: 47,
		  salary: 40000,
		});

		let res = JSON.stringify(arr);
		console.log(res); //
		</script>











  </body>
</html>
