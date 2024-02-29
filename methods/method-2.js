'use strict'

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this/* - возвращаем обїекта из каждого вызова.. */
    },
    down() {
      this.step--;
      return this
    },
    showStep: function() { // показывает текущую ступеньку
      alert( this.step );
      return this
    }
  };

ladder.up().up().down().showStep().down().showStep();