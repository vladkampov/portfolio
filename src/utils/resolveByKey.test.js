import resolveByKey, { multipleResolveByKey, resolveByKeys } from './resolveByKey';

describe('resolveByKey', () => {
	const data = [
		{
			'id': '03405012-1c41-4b78-9e33-89a041b80915',
			'name': 'anything'
		},
		{
			'id': '54654665-1c41-4b78-9e33-89a032132115',
			'name': 'something'
		},
		{
			'id': '32132323-1c41-4b78-9e33-89a044332915',
			'name': 'right name'
		}
	]

	it('should resolve name', () => {
		const id = '32132323-1c41-4b78-9e33-89a044332915';

		expect(resolveByKey(id, data, 'id', 'name')).toBe('right name');
	});

	it('returning same data if no name', () => {
		const id = 'such doge';
		expect(resolveByKey(id, data, 'id', 'name')).toBe(id);
	});

	it('returning same data even if object', () => {
		const obj = {};
		expect(resolveByKey(obj, data, 'id', 'name')).toBe(obj);
	});

	it('Returning error if data not array', () => {
		const notData = {};
		
		expect(() => {
			resolveByKey('name', notData, 'id', 'name')
		}).toThrow();
	});
});

describe('multipleResolveByKey', () => {
	const data = [
		{
			'id': '03405012-1c41-4b78-9e33-89a041b80915',
			'name': 'something'
		},
		{
			'id': '54654665-1c41-4b78-9e33-89a032132115',
			'name': 'something'
		},
		{
			'id': '32132323-1c41-4b78-9e33-89a044332915',
			'name': 'anything'
		}
	];

	it('should return array of names', () => {
		const name = 'something';
		const toBe = ["03405012-1c41-4b78-9e33-89a041b80915", "54654665-1c41-4b78-9e33-89a032132115"];

		expect(multipleResolveByKey(name, data, 'name', 'id')).toEqual(toBe);
	});

	it('returning empty array', () => {
		const id = 'such doge';
		const toBe = [];
		expect(multipleResolveByKey(id, data, 'id', 'name')).toEqual(toBe);
	});

	it('returning same data even if object', () => {
		const obj = {};
		expect(multipleResolveByKey(obj, data, 'id', 'name')).toEqual([]);
	});

	it('Returning error if data not array', () => {
		const notData = {};
		
		expect(() => {
			multipleResolveByKey('name', notData, 'id', 'name')
		}).toThrow();
	});
});

describe('multipleResolveByKey', () => {
	const data = [
		{
			'id': '03405012-1c41-4b78-9e33-89a041b80915',
			'name': 'something',
			'lalka': 1
		},
		{
			'id': '54654665-1c41-4b78-9e33-89a032132115',
			'name': 'something',
			'lalka': 2
		},
		{
			'id': '32132323-1c41-4b78-9e33-89a044332915',
			'name': 'anything'
		}
	];

	it('should resolve id', () => {
		const keysToFind = {
			'name': 'something',
			'lalka': 1
		};

		expect(resolveByKeys(keysToFind, data, 'id')).toBe('03405012-1c41-4b78-9e33-89a041b80915');
	});

	it('should return undefined', () => {
		const keysToFind = {
			'name': 'something',
			'lalka': 5
		};

		expect(resolveByKeys(keysToFind, data, 'id')).toBeFalsy();
	});

	it('Returning error if data not array', () => {
		const keysToFind = {
			'name': 'something',
			'lalka': 5
		};
		const notData = {};
		
		expect(() => {
			resolveByKeys(keysToFind, notData, 'id')
		}).toThrow();
	});

	it('should return undefined even if data is string', () => {
		expect(resolveByKeys('lalka', data, 'id')).toBeFalsy();
	});

});
