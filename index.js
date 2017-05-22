'use strict';
module.exports = function autobind(self) {
    _autobind(self, self.constructor.prototype);

};

function _autobind(self, proto) {
    for (var key of Object.getOwnPropertyNames( proto )) {
        if (typeof self[key] === 'function' && key !== 'constructor')
            self[key] = self[key].bind(self);
    }
    var parentProto = Object.getPrototypeOf(proto);
    if (parentProto !== Object.prototype) {
        _autobind(self, parentProto);
    }
}
