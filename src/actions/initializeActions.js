"use strict";

var Dispacher = require('../dispacher/appDispacher.js');
var AdministrationApi = require('../api/administrationApi.js');
var ActionTypes = require('../constants/actionTypes.js');

var InitializeActions = {
    initApp: function () {
        //Hey dispacher, go tell all the stores that an user has just created
        Dispacher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initialData: {
                users: AdministrationApi.getAllUsers()
            }
        });
    }
};

module.exports = InitializeActions;