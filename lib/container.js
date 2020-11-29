
function Container(value) {
	this.__value = value
}

Container.of = function(value) {
	return new Container(value)
}

Container.prototype.map = function(f) {
	return Container.of(f(this.__value))
}

exports.Container = Container

function Maybe(value) {
	this.__value = value
}

Maybe.of = function(value) {
	return new Maybe(value)
}

Maybe.prototype.isNothing = function() {
	return this.__value === undefined || this.__value === null
}

Maybe.prototype.map = function(f) {
	return this.isNothing() ? Maybe.of(null): Maybe.of(f(this.__value))
}

exports.Maybe = Maybe



