import { uuid } from './uuid';

describe('add', () => {
	it('should generate uuid of proper length', () => {
		expect(uuid().length).toBe(36);
	});

	it('should generate different uuida', () => {
		expect(uuid()).not.toEqual(uuid());
	});
});