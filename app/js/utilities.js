/* utilities.j */

function generateUniqueId(){//TODO thisss
    return Date.now();
};

// Utilities.randomIntFromInterval(7, 10);
var Utilities = (function utilsMethods() {

    return {
        randomIntFromInterval: function(max, min) {
          return Math.floor(Math.random() * (max - min)) + min;
        }
    };

}());


function generateRandomNumber(min_value , max_value) {
    return Math.floor(Math.random() * (max_value - min_value) + min_value);;
};

function randomElementInArray(array) {
    return array[generateRandomNumber(0, array.length)];
};