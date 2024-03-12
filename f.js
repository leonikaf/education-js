'use strict'

/*  */

function readNumber() {
    do {
        let number = +prompt('number?', '');
    } while ( typeof(number) != "number" );
    return; 
}
