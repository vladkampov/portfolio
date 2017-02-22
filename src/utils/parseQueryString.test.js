import * as p from './parseQueryString';

describe('parseQueryString func', () => {
	it('works with correct data', () => {
		const queryString = 'lalka=1&something=something&foo=bar';
		
		expect(p.parseQueryString(queryString)).toMatchObject({
			lalka: "1",
			something: 'something',
			foo: 'bar'
		});
	})

	it('works with undefined', () => {
		expect(p.parseQueryString()).toMatchObject({});
	})

	it('throw an error with not a string', () => {
		expect(() => {
			p.parseQueryString(12323);
		}).toThrow();
	})

	it('throw an error with not a string', () => {
		expect(() => {
			p.parseQueryString({});
		}).toThrow();
	})
})

describe('buildQueryString func', () => {
	it('works with correct data', () => {
		const object = {
			data: 1,
			lalka: true,
			such: 'wow'
		};

		expect(p.buildQueryString(object)).toEqual('data=1&lalka=true&such=wow');
	})

	it('throw an Error with undefined', () => {
		expect(() => {
			p.buildQueryString();
		}).toThrow();
	})

	it('throw an Error with not object value', () => {
		expect(() => {
			p.buildQueryString(123213);
		}).toThrow();
	})

	it('throw an Error with not object value', () => {
		expect(() => {
			p.buildQueryString('some string');
		}).toThrow();
	})
})
