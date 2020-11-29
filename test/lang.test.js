
const {
	map,
	prop,
	applySpec,
	identity,
	compose
} = require('../lib/lang')

const {
	Container
} = require('../lib/container')

it('identity', () => {
	expect(identity(1)).toBe(1)
	expect(identity(null)).toBe(null)
	const a = {}
	expect(identity(a)).toBe(a)
	expect(identity(undefined)).toBe(undefined)
})

it('map', () => {
	const arr = [1,2,3]
	const res1 = arr.map(x => x + 1)
	const res2 = map(x => x + 1)(arr)
	expect(res1).toEqual(res2)
	const res3 = map(x => x + 1)(Container.of(3))
	expect(res3).toEqual(Container.of(4))
})

it('prop', () => {
	const obj = {
		name: 'lgw'
	}
	const nameProp = prop('name')
	expect(nameProp(obj)).toBe('lgw')

})

it('applySpec', () => {
	const arr = [
		{
			name: 'lgw',
			age: 18
		},
		{
			name: 'zh',
			age: 19
		}
	]

	const res = [
		{
			age: 'lgw',
			name: 18
		},
		{
			age: 'zh',
			name: 19
		}
	]

	const convert = applySpec({
		name: prop('age'),
		age: prop('name')
	})
	expect(arr.map(convert)).toEqual(res)

})


it('compose', () => {

	const p = {
		a: {
			b: {
				c: {
					d: 'lgw'
				}
			}
		}
	}
	const getAbc = compose(
		prop('d'),
		prop('c'),
		prop('b'),
		prop('a')
	)

	compose(console.log, getAbc)(p)
})
