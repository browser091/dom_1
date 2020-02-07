function buttonFizzBuzz() {
    const newArr = [];
    function fizzBuzz(x) {
        if (x !== Number(x)) {
        alert('Ведите числовое значение!')
        } else {
        let n = 0;
        while (n < x) { 
            n++; 
        if (n % 3 === 0 && n % 5 === 0) {
            newArr.push("FizzBuzz");
        } else if (n % 3 === 0) {
            newArr.push("Fizz");
        } else if (n % 5 === 0) {
            newArr.push("Buzz");
        } else {
            newArr.push(n);
        }
    };
}
};
    fizzBuzz(parseInt(prompt('Введите число (от 1-ого до n):', '')));
    const fragment = document.createDocumentFragment();
    newArr.forEach(newArr => {
        const item = document.createElement('li');
        item.textContent = newArr;
        fragment.appendChild(item);
        document.getElementById('list').innerText = 'Ваши новые значения :'
    });
    document.getElementById('list').appendChild(fragment);
};