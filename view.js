'use strict';

class View {
    static printArr(arr) {
        for (let i in arr) {
            console.log(arr[i]);
        }
    }

    static default() {
        console.log('Command tidak sesuai!');
    }
}

module.exports = View;