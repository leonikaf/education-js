'use strict'

let calculator = {
    a: 0,
    b: 0,
    read() {
        this.a = +prompt('a?', '0');
        this.b = +prompt('b?', '0');
    },
    sum() { /* в решении 'return this.a + this.b' */
        let c = this.a += this.b; {
            return c;
        }       
    },
    mul() { /* в решении 'return this.a * this.b' */
        let d = this.a *= this.b; {
            return d;
        }
    },
  };
  
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );