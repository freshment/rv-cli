
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
