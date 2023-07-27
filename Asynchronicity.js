<!DOCTYPE html>
<html>
	<head>
    <meta charset="utf-8">
    <title> ... </title>
  </head>
  <body>




		//Asynchronicity Asynchronicity Asynchronicity Asynchronicity Asynchronicity Asynchronicity Asynchronicity Asynchronicity Asynchronicity




		<script>
		//асинхронный код - сначала выполнится второй вывод в консоль, и только потом - первый.

		function make(){
		  setTimeout(function() {
		    console.log('1');
		  }, 3000 );
		}
		make();
		console.log('2'); //2 //1

		</script>

		<script>
		//асинхронный код -  второй вывод в консоль выполнится после первого.

		function make(callback) {
			setTimeout(function() {
				console.log('1'); // некая асинхронная 	операция, может не одна
				callback();       // затем наш коллбэк
			}, 3000);
		}

		make(function() {
			console.log('2'); //1 //2
		});
		</script>

		<script>
		//в асинхронную функцию можно передавать входные параметры.
		//получим третий элемент массива:

		make(3, function(res) {
			console.log(res); // третий элемент массива
		});

		function make(num, callback) {
			setTimeout(function() {
				let arr = [1, 2, 3, 4, 5];
				callback(arr[num]); // результатом передаем элемент массива
			}, 3000);
		}
		</script>

		<script>
		//в асинхронную функцию можно передавать входные параметры.
		//получим сумму элементов массива:

		make(2, 3, function(res) {
			console.log(res); // второй и третий элемент массива
		});

		function make(num1, num2, callback) {
			setTimeout(function() {
				let arr = [1, 2, 3, 4, 5];
				callback(arr[num1]+arr[num2]); // результатом передаем элементы массива
			}, 2000);
		}
		</script>

		<script>
		/*В коллбэк-подходе с исключениями работают следующим образом:
		 в первый параметр коллбэка отправляют результат, а во второй - ошибку.*/

		 make(10, function(res, err) {
		 	if (!err) {
		 		console.log(res); // ошибки не возникло, выведем результат
		 	} else {
		 		console.log(err); // ошибка возникла, выведем ее текст
		 	}
		 });

		 function make(num, callback) {
		 	setTimeout(function() {
		 		let arr = [1, 2, 3, 4, 5];

		 		let err;
		 		if (arr[num] === undefined) {
		 			err = 'elem not exists'; // текст ошибки
		 		} else {
		 			err = null; // ошибки нет
		 		}

		 		callback(arr[num], err);
		 	}, 2000);
		 }

		</script>

		<script>
		/*реализуем функцию loadImage, которая будет загружать картинки.
		 Пусть первым параметром эта функция принимает путь к картинке,
		а вторым - коллбэк, который выполнится, когда картинка будет загружена */

		loadImage('image.png', function(image, err) {
			document.body.append(image); // разместим картинку по загрузке
		});
		//Либо с обработкой исключительной ситуации:
		loadImage('image.png', function(image, err) {
			if (!err) {
				document.body.append(image);
			} else {
				console.log('произошла ошибка: ' + err);
			}
		});

		</script>

		<script>
		//когда будут загружены все три картинки выведем сообщение в консоль
		//потенциальный callback hell

		loadImage('img1.png', function(image1,
			err1) {
			document.body.append(image1);

			loadImage('img2.png', function(image2,
				err2) {
				document.body.append(image2);

				loadImage('img3.png', function(image3,
					err3) {
					document.body.append(image3);
					console.log('все картинки загружены');
				});
			});
		});

		</script>

		<script>
		//Мы можем загрузить эти картинки в цикле:

		let arr = ['img1.png', 'img2.png', 'img3.png'];

		for (let path of arr) {
			loadImage(path, function(image, err) {
				document.body.append(image);
			});
		}
		</script>


		//Напишите реализацию приведенных функций.
		<p id="message"></p>
		<ul id="list">
			<li>a</li>
			<li>b</li>
			<li>c</li>
		</ul>
		<p id="amount"></p>
		<p id="result"></p>

		<script>
		setTimeout(function() {
			let arr = [1, 2, 3, 4, 5];

		  func1(arr);
			func2(arr);
			func3(arr);
			func4(arr);
		}, 3000);

		function func1(arr) {
		  let pMessage = document.querySelector('#message');
			pMessage.innerHTML = 'данные получены';
		}

		function func2(arr) {
		  let ulList  = document.querySelector('#list');
			for (let elem of arr){
		    let li = document.createElement('li');
		    li.textContent = elem;
		    ulList.appendChild(li);
		  }
		}

		function func3(arr) {
		  let pAmount  = document.querySelector('#amount');
		  pAmount.innerHTML = arr.length;
		}

		function func4(arr) {
		  let pResult  = document.querySelector('#result');
		  sum = 0;
			for (let elem of arr){
		    sum += +elem;
		    pResult.innerHTML = sum;
		}
		}
		</script>



		// Асинхронный код через подписки - функции on и emit.
		//let subsribers, function on, function emit - универсальны и не изменны!
		<p id="message"></p>
		<ul id="list">
			<li>a</li>
			<li>b</li>
			<li>c</li>
		</ul>
		<p id="amount"></p>
		<p id="result"></p>

		<script>
		let subsribers = {};

		function on(name, callback) {
			if (!subsribers[name]) {
				subsribers[name] = [];
			}
				subsribers[name].push(callback);
		}

		function emit(name, data) {
			if (subsribers[name]) {
				for (let callback of subsribers[name]) {
					callback(data);
				}
			}
		}

		setTimeout(function() {
			emit('loaded', [1, 2, 3, 4, 5]);
		}, 3000);

		on ('loaded', function func1(arr) {
		  let pMessage = document.querySelector('#message');
			pMessage.innerHTML = 'данные получены';
		});

		on ('loaded', function func2(arr) {
		  let ulList  = document.querySelector('#list');
			for (let elem of arr){
		    let li = document.createElement('li');
		    li.textContent = elem;
		    ulList.appendChild(li);
		  }
		});

		on ('loaded', function func3(arr) {
		  let pAmount  = document.querySelector('#amount');
		  pAmount.innerHTML = arr.length;
		});

		on ('loaded', function func4(arr) {
		  let pResult  = document.querySelector('#result');
		  sum = 0;
			for (let elem of arr){
		    sum += +elem;
		    pResult.innerHTML = sum;
		}
		});
		</script>


		<script>
		// Модель Promise асинхронного кода
		let promise = new Promise(function(resolve) {
			setTimeout(function() {
				let result = [1, 2, 3, 4, 5];
				resolve(result); // передаем результат
			}, 3000);
		});

		promise.then(function(result) {
			console.log(result); // выведет массив с результатом
		});
		</script>


		<script>
		// Модель Promise с обработкой ошибки
		let promise = new Promise(function(resolve, reject) {
			setTimeout(function() {
				let isError = false;

				if (!isError) {
					resolve([1, 2, 3, 4, 5]); // данные промиса
				} else {
					reject('error in promise'); // ваш текст ошибки
				}
			}, 3000);
		});

		promise.then(
			function(result) {
				console.log(result); // выведет результат промиса = resolve
			},
			function(error) {
				console.log(error);  // выведет текст ошибки = reject
			}
		);
		</script>


		<script>
		/*Сделайте асинхронный код, который будет генерировать случайные числа от 0 до 5. Оберните все это в промис.
		Пусть промис своим возвращает результат деления единицы на сгенерированное число.
		Пусть промис выполнится с ошибкой, если произошло деление на ноль, и с успехом во всех остальных случаях.*/
		let promise = new Promise(function(resolve, reject) {
			setTimeout(function() {
		    let randomNum = Math.floor(Math.random()*(5-0+1))+0;
		  	randomNum != 0;
		console.log(randomNum);

				if (randomNum) { // = true !!!!
					resolve(1/randomNum);
				} else {
					reject('error in promise');
				}
			}, 1000);
		});

		promise.then(
			function(result) {
				console.log(result);
			},
			function(error) {
				console.log(error);
			}
		);
		</script>


		<script>
		//Более принято в функцию reject передавать не строку с ошибкой, а объект с ошибкой:
		let promise = new Promise(function(resolve, reject) {
			setTimeout(function() {
				reject(new Error('error in promise'));
					// объект с ошибкой
			}, 3000);
		});
		</script>


		<script>
		//Можно также выбрасывать объекты с ошибками с помощью throw - это будет эквивалентно передаче их в reject:
		//В then можно указать только функцию-обработчик исключительной ситуации, передав вместо первого параметра null:
		let promise = new Promise(function(resolve, reject) {
			setTimeout(function() {
				throw new Error('error in promise');
					// эквивалентно reject
			}, 3000);
		});

		promise.then(
			null,
			function(error) {
				console.log(error);
			}
		);
		/* ИЛИ
		promise.catch(
			function(error) {
				console.log(error);
			}
		);
		*/
		</script>


		<script>
		//Промис может находится в одном из трех состояний.
		let promise = new Promise(function(resolve, reject) {
			setTimeout(function() {
				let isError = false; // поставьте либо true, либо false

				if (!isError) {
					resolve([1, 2, 3, 4, 5]);
				} else {
					reject('error in promise');
				}
			}, 3000);
		});

		setInterval(function() {
			console.log(promise); // каждую секунду смотрим состояния промиса
		}, 1000);

		</script>


		<script>
		//мы можем к результату нашего then применить еще один then, создав тем самым цепочку методов.
		let promise = new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve('string');
			}, 3000);
		});

		promise.then(
			function(result) {
				return result + '1';
			}
		).then(
			function(result) {
				return result + '2';
			}
		).then(
			function(result) {
				return result + '3';
			}
		).then(
			function(result) {
				console.log(result); // выведет 'string123'
		  }
		);
		</script>


		<script>
		//Функции цепочки могут также возвращать промисы.
		let promise = new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve('string');
			}, 3000);
		});

		promise.then(
			function(result) {
				return result + '1';
			}
		).then(
			function(result) {
				return new Promise(function(resolve) {
					resolve(result + '2');
					// этот результат попадет в следующий then
				});
			}
		).then(
			function(result) {
				return result + '3';
			}
		).then(
			function(result) {
				console.log(result); // выведет 'string123'
			}
		);
		</script>


		<script>
		//с помощью Promise.all дождемся окончания загрузки всех промисов из нашего массива:
		//Если хотя бы один из промисов в массиве будет отклонен, то промис с результатом сразу же перейдет в состояние rejected.
			new Promise(resolve => setTimeout(() => resolve(1), 1000)),
			new Promise(resolve => setTimeout(() => resolve(2), 2000)),
			new Promise(resolve => setTimeout(() => resolve(3), 3000)),
		];

		Promise.all(promises).then(function(res) {
			console.log(res);
		}).catch(function(err) {
			console.log(err);
		});
		</script>


		<script>
		//с помощью Promise.race дождемся окончания загрузки первого из промисов:
		let promises = [
			new Promise(resolve => setTimeout(() => resolve(1), 1000)),
			new Promise(resolve => setTimeout(() => resolve(2), 2000)),
			new Promise(resolve => setTimeout(() => resolve(3), 3000)),
		];

		Promise.race(promises).then(function(res) {
			console.log(res);
		  // выведет 1 - результат 	первого выполнившегося промиса
		});
		</script>


		<script>
		//Пусть у нас есть некоторая функция, которая параметром принимает число, что-то с ним делает асинхронно и возвращает промис с результатом:
		function func(num) {
			if (num > 0) {
				return new Promise(function(resolve) {
					setTimeout(function() {
						resolve(num * num);
					}, 3000);
				});
			} else {
				return 0; // нулевой результат
			}
		}

		func(5).then(function(res) {
			console.log(res); // выведет 25
		});
		</script>


		<script>
		//для переданного нуля мы должны вернуть ноль, а для чисел меньше нуля - исключение.
		function func(num) {
			if (num > 0) {
				return new Promise(function(resolve) {
					setTimeout(function() {
						resolve(num * num);
					}, 3000);
				});
			} else {
				return Promise.resolve(0);
		    // возвращаем промис, а не число
		  } else {
		  		return Promise.reject('incorrect number');
		  			// вернем отклоненный промис
		  	}
		  }
		</script>


		<script>
		//Промисификация загрузки картинок.
		function loadImage(path) {
			return new Promise(function(resolve, reject) {
				let image = document.createElement('img');
				image.src = path;

				image.addEventListener('load', function() {
					resolve(image);
				});
				image.addEventListener('error', function() {
					reject(new Error('image "' + path + '"  load error'));
				});
			});
		}

		loadImage('img.png').then(function(image) {
			document.body.appendChild(image);
		}).catch(function(error) {
			console.log(error);
		});
		</script>


		<script>
		//Сложный код типа promise hell.
		function getSmth(num) {
			return new Promise((resolve, reject) => {
				setTimeout(() => resolve(num * num), 1000)
			});
		}

		function func() {
			getSmth(2).then(res1 => {
				getSmth(3).then(res2 => {
					getSmth(4).then(res3 => {
						console.log(res1 + res2 + res3);
					});
				});
			});
		}
		func();

		</script>


		<script>
		//Промисы в синхронном стиле
		function getSmth(num) {
			return new Promise((resolve, reject) => {
				setTimeout(() => resolve(num * num), 1000)
			});
		}

		async function func() {
			let res1 = await getSmth(2);
			let res2 = await getSmth(3);

			console.log(res1 + res2); // выведет 	13
		}
		func();

		</script>


		<script>
		//Синхронный синтаксис промисов поддерживает обработку исключений через обычный try-catch:
		async function func() {
			try {
				let res = await getSmth(2);
				console.log(res);
			} catch (err) {
				console.log(err);
			}
		}
		func();

		</script>


		<script>
		// Cинхронный синтаксис промисов
		function getSmth(num) {
			return new Promise((resolve, reject) => {
				setTimeout(() => resolve(num + num), 1000)
			});
		}

		async function func() {
			let res1 = await getSmth(1);
			let res2 = await getSmth(2);
		  let res3 = await getSmth(3);
		  let res4 = await getSmth(4);

			console.log(res1 + res2 + res3 + res4); // выведет 	20
		}
		func();

		</script>








  </body>
</html>
