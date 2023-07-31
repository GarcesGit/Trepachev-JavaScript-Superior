
		//Exceptional situations Exceptional situations Exceptional situations Exceptional situations Exceptional situations Exceptional situations




		<script>
		//Для примера давайте попробуем разобрать JSON и в случае его некорректности выведем на экран сообщение об этом
		try {
			let data = JSON.parse('{1,2,3,4,5}');
		} catch (error) {
			alert('невозможно выполнить операцию разбора JSON');
		}
		</script>

		<script>
		//Специально создайте исключительную ситуацию, связанную с попыткой разбора некорректного JSON. Выведите в консоль имя и текст этой ошибки.
		try {
		  let data = JSON.parse('{1,2,3,4,5}');
		  alert('успешно выполнено');

		} catch (error) {
			alert('невозможно выполнить операцию');
		  console.log(error.name); // имя ошибки SyntaxError
			console.log(error.message); // текст ошибки Expected property name or '}' in JSON at position 1
		}
		</script>

		<script>
		//вывести сообщение о том, какая именно проблема возникла.
		function saveData(json) {
			try {
				let arr = JSON.parse(json);

				for (let i = 0; i < arr.length; i++) {
					try {
						localStorage.setItem(i, arr[i]);
					} catch (error) {
						alert('закончилось место в
							хранилище');
					}
				}
			} catch (error) {
				alert('некорректный JSON');
			}
		}
		saveData('[1,2,3,4,5}');
		</script>

		<script>
		//Выбрасывание исключение заставляет JavaScript считать, что случилась исключительная ситуация.
		function div(a, b) {
			if (b !== 0) {
				return a / b;
			} else {
				throw new Error('ошибка деления на	ноль');
			}
		}

		try {
			alert( div(3, 0) );
		} catch (error) {
			alert('вы пытаетесь делить на 0, что запрещено');
		}
		</script>

		<script>
		//Если исключение не известное, то его нужно пробросить дальше с помощью throw.
		try {
			let json = '{"product": "яблоко", "amount": 5}';
			let product = JSON.parse(json);

			if (product.price !== undefined
				&& product.amount !== undefined) {
				alert(product.price * product.amount);
			} else {
				throw {
					name: 'ProductCostError',
					message: 'отсутствует цена или количество у продукта'
				};
			}
		} catch (error) {
			if (error.name == 'SyntaxError') {
				alert('Некорректный JSON продукта');
			} else if (error.name == 'ProductCostError') {
				alert('У продукта отсутствует цена или количество');
		  } else {
				throw error; // пробрасываем исключение далее
		    }
		}
		</script>
