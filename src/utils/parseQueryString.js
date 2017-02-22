const parser = /([^=?&]+)=([^&]*)/g;

/**
 * Parse a query string to an object
 *
 * @param {String} qs - Query string that needs to be parsed.
 * @returns {Object}  - Key/Value pairs for query string parameters
 */
// eslint-disable-next-line import/prefer-default-export
export function parseQueryString(qs) {
	if (typeof qs === 'string' || typeof qs === 'undefined') {
		const result = {};
		let part;

		// eslint-disable-next-line no-cond-assign
		while ((part = parser.exec(qs)) !== null) {
			result[decodeURIComponent(part[1])] = decodeURIComponent(part[2]);
		}

		return result;
	}
	else {
		throw new Error('Not a string');
	}
}


/**
 * Build a query string from an object
 *
 * @param {Object} data - Key/Value pairs for query string parameters
 * @returns {String}  -  Query string that needs to be parsed
 */
// eslint-disable-next-line import/prefer-default-export
export function buildQueryString(data) {
	if (data !== null && typeof data === 'object')		{
		return Object.keys(data).reduce(((a, b, idx) => `${a}${idx ? '&' : ''}${b}=${data[b].toString()}`), '');
	}
	else		{
		throw new Error('Not object value');
	}
}
