'use strict';

var EventEmitter = require('events').EventEmitter;

function Emitter() {
    EventEmitter.call(this);
    this.setMaxListeners(20);
}

Emitter.prototype = Object.create(EventEmitter.prototype);
Emitter.prototype.constructor = Emitter;

Emitter.prototype.off = function(type, listener) {
    if (listener) {
        return this.removeListener(type, listener);
    }
    return this.removeAllListeners(type);
};

module.exports = Emitter;
