
const {
	isFunction
} = require('../lib/is')

it('isFunction', () => {
	expect(isFunction(() => {})).toBe(true)
	expect(isFunction(function(){})).toBe(true)
	expect(isFunction(null)).toBe(false)
	expect(isFunction({})).toBe(false)
	expect(isFunction(123)).toBe(false)
})
