class Validator {
   
    static сheckAllInputs(inputs) {
        let isWrong = true;
        for (let input of inputs) {
            if (input.value == 'pattern')
                isWrong = false;
        }
        return isWrong;
    }

if (Validator.сheckAllInputs(document.getElementsByClassName('test'))) {
    //есть неправильно введенное значение
    alert('есть неправильно введенное значение');
}