"use strict";

var Dispacher = require('../dispacher/appDispacher.js');
var ActionTypes = require('../constants/actionTypes.js');
var EventEmitter = require('events').eventHandler;
var assign = require('object-assign');
var CHANGE_EVENT = 'change';

var UserStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    }
});



