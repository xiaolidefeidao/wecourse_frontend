"use strict";

var Dispacher = require('../dispacher/appDispacher.js');
var AdministrationApi = require('../api/administrationApi.js');
var ActionTypes = require('../constants/actionTypes.js');

var UserActions = {
    createUser: function (user) {
        var newUser = AdministrationApi.saveUser(user);

        //Hey dispacher, go tell all the stores that an user has just created
        Dispacher.dispatch({
            actionType: ActionTypes.CREATE_USER,
            user: newUser
        });
    },

    updateUser: function (user) {
        var newUser = AdministrationApi.saveUser(user);

        //Hey dispacher, go tell all the stores that an user has just created
        Dispacher.dispatch({
            actionType: ActionTypes.UPDATE_USER,
            user: newUser
        });
    },

    deleteUser: function (id) {
        AdministrationApi.deleteUser(id);

        //Hey dispacher, go tell all the stores that an user has just created
        Dispacher.dispatch({
            actionType: ActionTypes.DELETE_USER,
            id: id
        });
    }
};

module.exports = UserActions;