/* utilities.js * Reusable and helper functions */

/* 
 * Generate unique id base on Data obj
 * @params none
 * @return number · milliseconds elapsed since 01/01/1970
 */
function generateUniqueId(){
    return Date.now();
};

/* 
 * Returns random number from a given interval
 *
 * @params minValue · number · interval begins at this number, not included
 * @params maxValue · number · interval ends at this number, INCLUDED
 * @return number · integer between interval
 */
function generateRandomNumber(minValue , maxValue) {
    return Math.floor(Math.random() * (maxValue - minValue) + minValue);;
};

/* 
 * Gets a random element from a given array using its position.
 * This position-number is generating by generateRandomNumber fn.
 *
 * @params array · object
 * @return element of the array, type depends on what you pass.
 * @requires generateRandomNumber() fn
 */
function randomElementInArray(array) {
    return array[generateRandomNumber(0, array.length)];
};

/* 
 * Parses the specified text as HTML or XML and inserts 
 * the resulting nodes into the DOM tree at a specified position.
 *
 * @params parent · object · DOM element
 * @params string · string · string to be parsed as HTML/XML
 * @params type   · A DOMString representing the position relative to the parent
 */
function addStringAsDomElement(parent, string, type = 'beforeend') {
	parent.insertAdjacentHTML(type, string);
}

/* 
 * Adds a node to the end of the list of children of a specified parent node
 *
 * @params parent · object · The node in which we want to append
 * @params child  · object · The node to append to the given parent node
 * @return appended child 
 */
function appendChild(parent, child) {
	parent.appendChild(child);
};








