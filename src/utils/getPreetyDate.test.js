import getPreetyDate from './getPreetyDate';

it('datgetPreetyDate works with valid dateObj', () => {
	const dateObj = new Date();
	expect(getPreetyDate(dateObj)).toMatch(/^\d{2}:\d{2}:\d{2} \d{2}\/\d{2}\/\d{4}$/);
})

it('datgetPreetyDate throw an error when date object is undefined', () => {
	expect(getPreetyDate).toThrow();
})

it('datgetPreetyDate throw an error with invalid date', () => {
	const invalidDateObj = new Date('not date string');

	expect(() => {
		getPreetyDate(invalidDateObj)
	}).toThrow();
})

it('datgetPreetyDate throw an error with a string', () => {
	const string = 'not date string';
	
	expect(() => {
		getPreetyDate(string)
	}).toThrow();
})
