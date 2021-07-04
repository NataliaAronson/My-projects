//Проверка для одного поля

let errors = [];   //массив под ошибки
function checkValidity(input) {
    let validity = input.validity;

 if (validity.valueMissing) 
		{ errors.push('Please, fill in this field'); }

    if (validity.patternMismatch) 
		{ errors.push('Sorry,wrong format'); }
    
		if (validity.rangeOverflow) 
		{ let max = input.max;
			errors.push('Maximum value can not be more than' + max); }
    
		if (validity.rangeUnderflow) 
		{ let min = input.min;
			errors.push('Minimum value can not be less than' + min); }
    
}


//Проверка для всех полей

function checkAll() {  
    //получаем все инпуты
		
    let inputs = document.querySelectorAll("input");
	
    for (let input of inputs) {
        checkValidity(input);
         //создаем цикл,перебираем инпуты и на каждый вызываем функцию валидации
    }
    document.getElementById('errorsInfo').innerHTML= errors.join('.<br>'); 
  }
//дальше если фома валидна, нужно её отправить на сервер и как тогда 2 функции повесить на 1 кнопку?????
let user =
username : document.getElementById("username").value,
email:document.getElementById("email").value,
psw :document.getElementById("psw").value,
psw-repeat:document.getElementById("result").value
// можно было собрать значения из инпутов через массив с  input of inputs , но я не знаю синтаксис
if ('errorsInfo' == "") postButton.onclick = function(event){event.preventDefault()

fetch ("https//httpbin.org/post",
{
  method: 'POST',
  headers: {
    'Content-Type':'application/json;charset=utf-8'
  },
  body: JSON.stringify(user)
});
