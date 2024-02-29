'use strict'

function Accumulator(starvingValue) {
    this.value = starvingValue;

    this.read = function() {
        this.value += prompt('value?', '0');
    }
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений
  