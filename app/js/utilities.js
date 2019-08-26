/* utilities.j */

function generateUniqueId(){//TODO thisss
    return Date.now();
};

function generateRandomNumber(min_value , max_value) {
    return Math.floor(Math.random() * (max_value - min_value) + min_value);;
};

function randomElementInArray(array) {
    return array[generateRandomNumber(0, array.length)];
};

function addStringAsDomElement(parent, string, type = 'beforeend') {
	parent.insertAdjacentHTML(type, string);
}

function appendChild(parent, child) {
	parent.appendChild(child);//Utils
}