
module.exports = function (self) {
	autobind(self, self.constructor.prototype);

}

function autobind(self, proto) {
	for(let key of Object.getOwnPropertyNames( proto )){
		if(key !== 'constructor') self[key] = self[key].bind(self);
	}
	let parentProto = Object.getPrototypeOf(proto);
	if (parentProto !== Object.prototype){
		autobind(self, parentProto);
	}
}