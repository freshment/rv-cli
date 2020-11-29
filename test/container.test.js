
const {
	Container,
	Maybe
} = require('../lib/container')


it('Container', () => {
	const input = Container.of('lgw')
		.map(x => x.concat(' and'))
		.map(x => x.concat( ' zh'))
	const output = Container.of('lgw and zh')
	expect(input).toEqual(output)
})

it('Maybe', () => {
	const input = Maybe.of('lgw')
		.map(x => null)
		.map(x => x.concat(' and'))
		.map(x => x.concat( ' zh'))
	const output = Maybe.of(null)
	expect(input).toEqual(output)
})
