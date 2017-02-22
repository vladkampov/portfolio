import * as fetchJS from './fetch';

it('JSON parses in a right way', () => {
	const responseObject = {
		json: () => {
			return { testName: 'testValue' }
		}
	};

	expect(fetchJS.parseJSON(responseObject)).toMatchObject(responseObject.json())
});

it('fetch_defaults object is defined', () => {
	expect(fetchJS.fetchDefaults).toMatchObject({})
});

it('checkStatus func return an Error for status > 300', () => {
	const notFoundResponse = {
		status: 400,
		statusText: 'Not found'
	};

	expect(() => {
		fetchJS.checkStatus(notFoundResponse)
	}).toThrow();
});

describe('checkStatus funciton', () => {
	it('checkStatus func return an Error for status > 300', () => {
		const wrongResponse = {
			status: 150,
			statusText: 'Wrong response status'
		};

		expect(() => {
			fetchJS.checkStatus(wrongResponse)
		}).toThrow();
	});

	it('checkStatus func return response object for right statuses', () => {
		const rightResponse = {
			status: 200,
			statusText: 'OK'
		};

		expect(fetchJS.checkStatus(rightResponse)).toMatchObject({});
	});
});

it('parseText return response value in a string', () => {
	const responseObject = {
		text: () => {
			return 'some text in a response'
		}
	};

	expect(fetchJS.parseText(responseObject)).toContain('some text in a response');
});
