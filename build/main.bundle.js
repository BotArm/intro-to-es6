'use strict';

function main() {
    for (var i = 0; i < 1; i++) {
        console.log('internal i', i);
    }
    console.log('external i', i);
}

main();
