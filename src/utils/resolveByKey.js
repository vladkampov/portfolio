/**
 * Resolve object property by key
 * @param {string} data - looking for object by this value
 * @param {array} array - array of objects where we looking for a object
 * @param {string} keyToFind - looking for object by this key value
 * @param {string} keyToResolve - returning value from object with this key
 * @returns {string}
 */
export default function resolveByKey(data, array, keyToFind, keyToResolve) {
	if (!Array.isArray(array) && !array.find) {
		throw new Error('Second param must be an array');
	}

	const findedObj = array.find((el, i, arr) => el[keyToFind] === data);

	if (findedObj) {
		return findedObj[keyToResolve];
	}

	return data;
}

/**
 * Resolve object property by keys
 * @param {object} keysToFind - looking for object by keys and values from this object
 * @param {array} array - array of objects where we looking for a object
 * @param {string} keyToResolve - returning value from object with this key
 * @returns {string} or {undefined}
 */
export function resolveByKeys(keysToFind, array, keyToResolve) {
	if (!Array.isArray(array) && !array.find) {
		throw new Error('Second param must be an array');
	}

	const resolvedObj = array.find(obj => {
		const keysArray = Object.keys(keysToFind);
		let i = 0;

		while (i < keysArray.length) {
			if (keysToFind[keysArray[i]] !== obj[keysArray[i]]) {
				return null;
			}
			i += 1;
		}

		return obj;
	});

	if (resolvedObj) {
		return resolvedObj[keyToResolve];
	}

	return resolvedObj;
}

/**
 * Resolve objects property by key
 * @param {string} data - looking for object by this value
 * @param {array} array - array of objects where we looking for a object
 * @param {string} keyToFind - looking for object by this key value
 * @param {string} keyToResolve - returning value from object with this key
 * @returns {Array}
 */
export function multipleResolveByKey(data, array, keyToFind, keyToResolve) {
	if (!Array.isArray(array) && !array.find) {
		throw new Error('Second param must be an array');
	}

	const arrayToRender = array.map(el => {
		if (el[keyToFind] === data) {
			return el[keyToResolve];
		}
		return null;
	}).filter(el => el !== null);

	return arrayToRender;
}
