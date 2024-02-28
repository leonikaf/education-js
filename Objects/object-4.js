'use strict'

/* Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

P.S. Используйте typeof для проверки, что значение свойства числовое. */

/* let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
  
  // после вызова функции
  menu = {
    width: 400,
    height: 600,
    title: "My menu"
  }; */

  
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
    
}