
	//Регулярные выражения Регулярные выражения Регулярные выражения Регулярные выражения Регулярные выражения Регулярные выражения




	<script>
	const str = 'xax eee';
	const newstr = 'xax eee'.replace(/x.x/, '!');
	console.log(newstr); //! eee
	</script>

	<script>
	//Напишите регулярку, которая найдет строки 'ahb', 'acb', 'aeb' по шаблону: буква 'a', любой символ, буква 'b'.
	let str = 'ahb acb aeb aeeb adcb 	axeb';
	let newstr = str.replace(/a.b/g, 'xxx');
	console.log(newstr); //xxx
	</script>

	<script>
	//Напишите регулярку, которая найдет строки 'aba', 'abba', 'abbba' по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'.
	let str = 'aa aba abba abbba abca abea';
	let newstr = str.replace(/ab+a/g, 'x');
	console.log(newstr); //aa x x x abca abea
	</script>

	<script>
	//Напишите регулярку, которая найдет строки 'aa', 'aba', 'abba', 'abbba' по шаблону: буква 'a', буква 'b' любое количество раз (в том числе ниодного раза), буква 'a'.
	let str = 'aa aba abba abbba abca abea';
	let newstr = str.replace(/ab*a/g, 'x');
	console.log(newstr); //x x x x abca abea
	</script>

	<script>
	//Напишите регулярку, которая найдет строки 'aa', 'aba' по шаблону: буква 'a', буква 'b' один раз или ниодного, буква 'a'.
	let str = 'aa aba abba abbba abca abea';
	let newstr = str.replace(/ab?a/g, 'x');
	console.log(newstr); //x x abba abbba abca abea
	</script>

	<script>
	//Напишите регулярку, которая найдет строки по шаблону: строка 'ab' повторяется 1 или более раз.
	let str = 'ab abab abab abababab abea';
	let newstr = str.replace(/(ab)/g, 'x');
	console.log(newstr); //x xx xx xxxx xea
	</script>

	<script>
	//Напишите регулярку, которая найдет строку 'a.a', не захватив остальные.
	let str =  'a.a aba aea';
	let newstr = str.replace(/a\.a/g, 'x');
	console.log(newstr); //x aba aea
	</script>

	<script>
	//Напишите регулярку, которая найдет строки '2+3', '2++3', '2+++3', не захватив остальные
	let str =  '23 2+3 2++3 2+++3 345 567';
	let newstr = str.replace(/2\++3/g, 'x');
	console.log(newstr); //23 x x x 345 567
	</script>

	<script>
	//Напишите регулярку, которая найдет строки '*q+', '*qq+', '*qqq+', не захватив остальные.
	let str = '*+ *q+ *qq+ *qqq+ *qqq qqq+';
	let newstr = str.replace(/\*q+\++/g, 'x');
	console.log(newstr); //*+ x x x *qqq qqq+
	</script>

	<script>
	//Напишите регулярку, которая найдет строки в квадратных скобках и заменят их на '!'.
	let str = '[abc] {abc} abc (abc) [abc]';
	let newstr = str.replace(/\[.*?\]/g, '!');
	console.log(newstr); //! {abc} abc (abc) !
	</script>

	<script>
	//Напишите регулярку, которая найдет строки 'abba', 'abbba', 'abbbba' и только их.
	let str = 'aa aba abba abbba abbbba abbbbba';
	let newstr = str.replace(/ab{2,5}a/g, 'x');
	console.log(newstr); //aa aba x x x x
	</script>

	<script>
	//Напишите регулярку, которая найдет строки вида 'aba', в которых 'b' встречается более 4-х раз (включительно).
	let str = 'aa aba abba abbba abbbba abbbbba';
	let newstr = str.replace(/ab{4,}a/g, 'x');
	console.log(newstr); //aa aba abba abbba x x
	</script>

	<script>
	//Напишите регулярку, которая найдет все строки по краям которых стоят буквы 'a', и заменит каждую из них на '!'.
	let str = 'aba accca azzza wwwwa';
	let newstr = str.replace(/a.*?a/g, '!');
	console.log(newstr); //! ! ! wwwwa
	</script>

	<script>
	//Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними одна цифра.
	let str1 = 'a1a a2a a3a a4a a5a aba aca';
	let newstr1 = str.replace(/a\da/g, '!');
	console.log(newstr1); //! ! ! ! ! aba aca
	</script>

	<script>
	//Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними любое количество цифр.
	let str = 'a1a a22a a333a a4444a a55555a aba aca';
	let newstr = str.replace(/a\d+a/g, '!');
	console.log(newstr); //! ! ! ! ! aba aca
	</script>

	<script>
	//Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними любое количество цифр (в том числе и ноль цифр, то есть строка 'aa').
	let str =  'aa a1a a22a a333a a4444a a55555a aba aca';
	let newstr = str.replace(/a\d*a/g, '!');
	console.log(newstr); //! ! ! ! ! ! aba aca
	</script>

	<script>
	//Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a' и 'b', а между ними - не число.
	let str = 'avb a1b a2b a3b a4b a5b abb acb';
	let newstr = str.replace(/a\Db/g, '!');
	console.log(newstr); //! a1b a2b a3b a4b a5b ! !
	</script>

	<script>
	//Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a' и 'b', а между ними - не буква и не цифра.
	let str = 'ave a#b a2b a$b a4b a5b a-b acb';
	let newstr = str.replace(/a\Wb/g, '!');
	console.log(newstr); //ave ! a2b ! a4b a5b ! acb
	</script>

	<script>
	//Напишите регулярку, которая заменит все пробелы на '!'.
	let str = 'ave a#a a2a a$a a4a a5a a-a aca';
	let newstr = str.replace(/\s/g, '!');
	console.log(newstr); //ave!a#a!a2a!a$a!a4a!a5a!a-a!aca
	</script>

	<script>
	//Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - буква 'b', 'e' или 'x'.
	let str = 'aba aea aca aza axa';
	let newstr = str.replace(/a[bex]a/g, '!');
	console.log(newstr); //! ! aca aza !
	</script>

	<script>
	//Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - цифра от 3-х до 6-ти.
	let str =  'a1a a3a a7a a9a aba';
	let newstr = str.replace(/a[3-6]a/g, '!');
	console.log(newstr); //a1a ! a7a a9a aba
	</script>

	<script>
	//Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - буква от a до f и от j до z.
	let str = 'aba aea afa aha aga';
	let newstr = str.replace(/a[a-fj-z]a/g, '!');
	console.log(newstr); //! ! ! aha aga
	</script>

	<script>
	//Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - буква от a до f и от A до D.
	let str = 'aAa aea aEa aJa a3a';
	let newstr = str.replace(/a[a-fA-D]a/g, '!');
	console.log(newstr); //! ! aEa aJa a3a
	</script>

	<script>
	//Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - маленькие латинские буквы, не затронув остальных.
	let str = 'aAXa aeffa aGha aza ax23a a3sSa';
	let newstr = str.replace(/a[a-z]a/g, '!');
	console.log(newstr); //aAXa aeffa aGha ! ax23a a3sSa
	</script>

	<script>
	//Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - маленькие и большие латинские буквы, не затронув остальных.
	let str = 'aAXa aeffa aGha aza ax23a a3sSa';
	let newstr = str.replace(/a[a-zA-Z]+a/g, '!');
	console.log(newstr); //! ! ! ! ax23a a3sSa
	</script>

	<script>
	//Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - маленькие латинские буквы и цифры, не затронув остальных.
	let str = 'aAXa aeffa aGha aza ax23a a3sSa';
	let newstr = str.replace(/a[a-z1-9]+a/g, '!');
	console.log(newstr); //aAXa ! aGha ! ! a3sSa
	</script>

	<script>
	//Напишите регулярку, которая найдет строки по шаблону: цифра '1', затем символ не 'e' и не 'x', цифра '2'.
	let str = '1e2  aba aea 1x2 1a2';
	let newstr = str.replace(/1[^ex]2/g, '!');
	console.log(newstr); //1e2  aba aea 1x2 !
	</script>

	<script>
	//Напишите регулярку, которая найдет строки по шаблону: по краям стоят буквы 'w', а между ними - буква кириллицы.
	let str = 'wйw wяw wёw wqw';
	let newstr = str.replace(/w[а-яё]w/g, '!');
	console.log(newstr); //! ! ! wqw
	</script>

	<script>
	//Напишите регулярку, которая найдет все слова по шаблону: любая кириллическая буква любое количество раз.
	let str = 'ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ';
	let newstr = str.replace(/[а-яёА-ЯЁ]+/g, '!');
	console.log(newstr); //! ! ! ! ! ! ! ! ! !
	</script>

	<script>
	//Напишите регулярку, которая найдет строки 'a.a', 'a+a', 'a*a', не затронув остальных.
	let str = 'aba aea aca aza axa a.a a+a a*a';
	let newstr = str.replace(/a[.+*]a/g, '!');
	console.log(newstr); //aba aea aca aza axa ! ! !
	</script>

	<script>
	//Напишите регулярку, которая найдет строки по шаблону: буква 'x', затем НЕ точка, НЕ собака, и НЕ доллар, а потом буква 'z'.
	let str = 'xaz x.z x3z x@z x$z xrz';
	let newstr = str.replace(/x[^.@$]z/g, '!');
	console.log(newstr); //! x.z ! x@z x$z !
	</script>

	<script>
	//Напишите регулярку, которая найдет строки по шаблону: цифра или точка от 1 и более раз.
	let str = 'xaz x.z x3z x@z x$z x33z';
	let newstr = str.replace(/x[\d.]+z/g, '!');
	console.log(newstr); //xaz ! ! x@z x$z !
	</script>

	<script>
	//Напишите регулярку, которая найдет строки по шаблону: не цифра и не буква от 'a' до 'g' от 3 до 7 раз.
	let str = 'xaz x.z x3z x@z x$z x33z';
	let newstr = str.replace(/x[^\da-z]z/g, '!');
	console.log(newstr); //xaz ! ! x@z x$z !
	</script>

	<script>
	//Напишите регулярку, которая найдет все слова по шаблону: буква 'x', затем любое количество любых скобок, затем буква 'z'.
	let str = 'x[][]]z x{}z x.z x()z';
	let newstr = str.replace(/x[\[\]\{\}\(\)]+z/g, '!');
	console.log(newstr); //! ! x.z !
	</script>

	<script>
	// !!!! Напишите регулярку, которая найдет строки в любых скобках и заменят их на '!'.
	let str = '[abc] {abc} abc (abc) [abc]';
	let newstr = str.replace(/[\[\{\(]\w+[\]\}\)]/g, '!');
	console.log(newstr); //! ! abc ! !
	</script>

	<script>
	//Напишите регулярку, которая найдет строки по шаблону: шляпка или собака, а затем две латинских буквы.
	let str = '^xx axx ^zz bkk @ss';
	let newstr = str.replace(/[\^@][a-z][a-z]/g, '!');
	console.log(newstr); //! axx ! bkk !
	</script>

	<script>
	// !!!! Напишите регулярку, которая найдет строки по шаблону: НЕ шляпка и не собака, а затем две латинских буквы.
	let str = '^xx axx ^zz bkk @ss';
	let newstr = str.replace(/[^\@^\s][a-z]{2}/g, '!');
	console.log(newstr); //^xx ! ^zz ! @ss
	</script>

	<script>
	//Найдите все строки по следующему шаблону: буква 'x', большая или маленькая буква или дефис, буква 'z'.
	let str = 'xaz xBz xcz x-z x@z';
	let newstr = str.replace(/x[a-zA-Z-]z/g, '!');
	console.log(newstr); //! ! ! ! x@z
	</script>

	<script>
	//Найдите все строки по следующему шаблону: буква 'x', затем или доллар, или дефис или плюс, потом буква 'z'.
	let str = 'xaz x$z x-z xcz x+z x%z x*z';
	let newstr = str.replace(/x[\+$-]z/g, '!');
	console.log(newstr); //xaz ! ! xcz ! x%z x*z
	</script>

	<script>
	//Напишите регулярку, которая найдет первую подстроку из букв.
	let str = 'abc def xyz';
	let newstr = str.replace(/^[a-z]+/g, '!');
	console.log(newstr); //! def xyz
	</script>

	<script>
	//Напишите регулярку, которая найдет последнюю подстроку из букв.
	let str = 'abc def xyz';
	let newstr = str.replace(/[a-z]+$/g, '!');
	console.log(newstr); //abc def !
	</script>

	<script>
	//Напишите регулярку, которая найдет строки по шаблону: по краям стоят буквы 'a', а между ними - или буква 'e' любое количество раз или буква 'x' любое количество раз.
	let str = 'aeeea aeea aea axa axxa axxxa';
	let newstr = str.replace(/a(e+|x+)a/g, '!');
	console.log(newstr); //! ! ! ! ! !
	</script>

	<script>
	//Напишите регулярку, которая найдет строки по шаблону: по краям стоят буквы 'a', а между ними - или буква 'e' два раза или буква 'x' любое количество раз.
	let str = 'aeeea aeea aea axa axxa axxxa';
	let newstr = str.replace(/a(e{2}|x+)a/g, '!');
	console.log(newstr); //aeeea ! aea ! ! !
	</script>


	<script>
	// !!!! Определите, начинается ли переданная строка с 'http://'.
	let str = 'https://code.mu/';
	let test = /https:\/\//.test(str);
	console.log(test); // вернет true
	</script>
	//ИЛИ
	<script>
	console.log(/https:\/\//.test('https://code.mu/')); // вернет true
	</script>

	<script>
	//Определите, начинается ли переданная строка с 'http://' или с 'https://'.
	console.log(/http:\/\/|https:\/\//.test('http://code.mu/')); // вернет true
	</script>

	<script>
	//Определите, что ли заканчивается переданная строка расширением 'jpg', 'jpeg' или 'png'.
	console.log(/png|jpeg|jpg$/.test('image.png')); // вернет true
	</script>

	<script>
	//Определите, является ли строка 'числом, длиной от 1 до 12 цифр'.
	console.log(/^[0-9]{12}$/.test('123456789012')); // вернет true
	</script>

	<script>
	//Определите, является ли переданная строка датой в формате год-месяц-день.
	console.log(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test('1975-08-31')); // вернет true
	</script>

	<script>
	//Определите, является ли переданная строка датой в формате день.месяц.год.
	console.log(/^[0-9]{2}.[0-9]{2}.[0-9]{4}$/.test('15.08.2018')); // вернет true
	</script>

	<script>
	//Определите, является ли переданная строка временем в формате часы:минуты:секунды.
	console.log(/^[0-9]{2}:[0-9]{2}:[0-9]{2}$/.test('12:20:50')); // вернет true
	</script>

	<script>
	//Давайте получим массив всех цифр:
	let str = '1 23 456 789';
	let res = str.match(/\d/g);
	console.log(res); // ['1', '2', '3', '4', '5', '6', '7', '8', '9']
	</script>

	<script>
	//Получите массив доменных имен из этой строки.
	let str = 'site.ru sss site.com zzz site.net';
	let res = str.match(/[a-z]+.ru|[a-z]+.com|[a-z]+.net/g);
	console.log(res); //['site.ru', 'site.com', 'site.net']
	</script>

	<script>
	//Найдите сумму всех чисел этой строки.
	let str = 'a1b c34d x567z';
	let res = str.match(/\d/g);
	let sum = 0;
	for (let num of res){
	  sum += +num;
	}
	console.log(sum); //26
	</script>

	<script>
	//Найдите этот домен и положите его имя в первый карман, а зону - во второй.
	let str = 'sss domain.ru zzz';
	let res = str.match(/([a-z]+)(.ru)/);
	console.log(res); //['domain.ru',.....
	console.log(res[1]); //domain
	console.log(res[2]); //.ru
	</script>

	<script>
	//Положите день в первый карман, месяц - во второй, а год - в третий.
	let str = '31.12.2025';
	let res = str.match(/(\d+).(\d+).(\d+)/);
	console.log(res); //['31.12.2025',.....
	console.log(res[1]); //31
	console.log(res[2]); //12
	console.log(res[3]); //2025
	</script>

	<script>
	//Поменяйте местами цифры во всех двухзначных числах.
	let str = '12 34 56 78';
	let res = str.replace(/(\d)(\d)/g, '$2$1');
	console.log(res); //21 43 65 87
	</script>

	<script>
	//Преобразуйте эту дату в '2025.12.31'.
	let str =  '31.12.2025';
	let res = str.replace(/(\d+).(\d+).(\d+)/g, '$3.$2.$1');
	console.log(res); //2025.12.31
	</script>

	<script>
	//Напишите регулярку, которая рядом с каждой цифрой напишет такую же.
	let str = 'a1b2c3';
	let res = str.replace(/\w/g, '$&$&');
	console.log(res); //aa11bb22cc33
	</script>

	<script>
	//Замените домены на ссылки вида: <a href="http://site.ru">site.ru</a>
	let str = 'sss site.ru zzz site.com kkk';
	let res = str.replace(/[a-z]+.ru|[a-z]+.com/g, '<a href="http://$&">$&</a>');
	console.log(res); //sss <a href="http://site.ru">site.ru</a> zzz <a href="http://site.com">site.com</a> kkk
	</script>

	<script>
	//Давайте найдем в ней все слова, в которых одинаковы первая и последняя буквы.
	let str = 'asxca buzxb csgd';
	let res = str.replace(/([a-z])[a-z]+\1/g, '!');
	console.log(res); //! ! csgd
	</script>

	<script>
	//Найдите все подстроки, в которых есть три одинаковые буквы подряд.
	let str = 'aaa bbb ccc xyz';
	let res = str.replace(/([a-z])\1\1/g, '!');
	console.log(res); //! ! ! xyz
	</script>

	<script>
	//Найдите все подстроки, в которых есть две и более одинаковые буквы подряд.
	let str = 'a aa aaa aaaa aaaaa';
	let res = str.replace(/([a-z])\1+/g, '!');
	console.log(res); //a ! ! ! !
	</script>

	<script>
	//Найдите все подстроки, в которых есть два одинаковых слова подряд.
	let str = 'aaa aaa bbb bbb ccc ddd';
	let res = str.replace(/(\w+)(\w+) \1\2/g,'!');
	console.log(res); //! ! ccc ddd
	</script>

	<script>
	//Сделаем так, чтобы первая пара скобок только группировала, но не клала в карман:
	let str = 'abab123';
	let res = str.match(/(?:ab)+([1-9]+)/);
	console.log(res[1]); // выведет '123'
	</script>

	<script>
	//Получите массив имен функций из строки.
	let str = 'func1() func2() func3()';
	let res = str.match(/\w+(?=())/g);
	console.log(res); // ['func1', 'func2', 'func3']
	</script>

	<script>
	//Получите массив имен атрибутов этого тега.
	let str = '<a href="" class="eee" id="zzz">';
	  let res = str.match(/\w+(?==)/g);
	console.log(res); // ['href', 'class', 'id']
	</script>

	<script>
	//выведем наши числа по очереди в консоль в функции-коллбэке:
	let str = '2 3 4 5';
	str.replace(/\d+/g, function(match) {
		console.log(match);
	}); //2 3 4 5
	</script>


	<script>
	//разложим первое и второе слагаемые по отдельным карманам:
	let str = '2+3= 4+5= 6+7=';
	str.replace(/(\d+)\+(\d+)=/g,
		function (match0, match1, match2) {
		console.log(match0, match1, match2);
	});
	</script>

	<script>
	//заменим эти числа на их квадраты.
	let str = '2 3 4 5';
	let result = str.replace(/\d+/g, function (match) {
		return match**2;
	});
	console.log(result); // выведет '4 9 16 25'
	</script>

	<script>
	//сделаем так, чтобы после равно вставились суммы соответствующих чисел.
	let str = '2+3= 4+5= 6+7=';
	let result = str.replace(/(\d+)\+(\d+)=/g,
		function(match0, match1, match2) {
	    console.log(match0); //2+3= 4+5= 6+7=
	    console.log(match1); //2 4 6
	    console.log(match2); //3 5 7
		let sum = Number(match1) + Number(match2);
		return match0 + sum;
	});
	console.log(result); //2+3=5 4+5=9 6+7=13
	</script>

	<script>
	//Найдите числа, стоящие в скобках и увеличьте их в два раза.
	let str = 'aaa [2] bbb [3] ccc [12] ddd';
	let res = str.replace(/(\d+)/g, function(match) {
	return Number(match)+Number(match);
	});
	console.log(res); //aaa [4] bbb [6] ccc [24] ddd
	</script>

	<script>
	//Найдите все числа и переверните их цифры в обратном порядке.
	let str = '123 456 789';
	let res = str.replace(/(\d)(\d)(\d)/g, function(match0, match1, match2, match3) {
	  console.log(match0);
	return match3+match2+match1;
	});
	console.log(res);//321 654 987
	</script>

	<script>
	//Найдите все числа и переверните их цифры в обратном порядке.
	let str = '31.12.2025 30.11.2024 29.10.2023';
	let res = str.replace(/(\d+).(\d+).(\d+)/g, function(match0, match1, match2, match3) {
	  console.log(match0);
	return match3 + '-' + match2 + '-' + match1;
	});
	console.log(res);//2025-12-31 2024-11-30 2023-10-29
	</script>

	<script>
	//Найдите позицию первого числа, состоящего из трех цифр.
	let str = '1 23 456 789';
	let res = str.search(/\d{3}/);
	console.log(res);// 5
	</script>

	<script>
	//Разбейте эту строку так, чтобы все части даты и времени были в одном массиве.
	let str = '2025-12-31 12:59:59';
	let res = str.split(/[- :]/);
	console.log(res);// ['2025', '12', '31', '12', '59', '59']
	</script>

	<script>
	//Определите, что год находится в интервале от 1900 до 2100 с помощью одного только регулярного выражения.
	let str = '2009';
	let res = str.replace(/19\d+|20\d+|2100/g,'yes');
	console.log(res); //yes

	console.log(/19\d+|20\d+|2100/.test('2000'));//true
	</script>

	<script>
	//Определите, что переданная строка является корректным временем вида часы:минуты. Часы и минуты не должны выходить за диапазон времени.
	console.log(/^0[0-9]|1[0-2]:[0-5][0-9]$/.test('11:59')); // вернет true
	</script>

	<script>
	//Удалите одной регуляркой все повторяющиеся слова из строки.
	let str = 'Hello hello world world hello';
	console.log(str.replace(????);
	</script>

	<script>
	//Удалите одной регуляркой все слова из предложения, содержащие две одинаковые следующие друг за другом буквы.
	let str = 'puppy, kitty, dog';
	let res = str.replace(/\w+([a-z])\1\w+/g, '!');
	console.log(res); //!, !, dog
	</script>
