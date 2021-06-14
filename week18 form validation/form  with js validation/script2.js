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
    let errors = []; 
    //очищаем предыдущие ошибочные попытки
		
    let inputs = document.querySelectorAll("input");
	
    for (let input of inputs) {
        checkValidity(input);
         //создаем цикл,перебираем инпуты и на каждый вызываем функцию валидации
    }
    document.getElementById('errorsInfo').innerHTML= errors.jojn('.<br>'); 

}




//let errorDiv = document.querySelector('.errorsInfo');
//errorDiv.innerHTML = errors.join('. \n'); 
//выводим ошибки в div 
   