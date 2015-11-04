"use strict";

var React = require('react');
var AdministrationApi = require('../../api/administrationApi');
    var UserList = require('./userList');
    var Router = require('react-router');
var Link = Router.Link;

var AdministrationPage = React.createClass({
    getInitialState: function () {
        return {
            users: []
        };
    },
    componentWillMount: function () {
        var usersRet = AdministrationApi.getAllUsers();
        this.setState({users: usersRet});
    },
    render: function () {

        return (
            <div>
                <div className="jumbotron">
                    <h1>Administration</h1>
                </div>
                <Link className="btn btn-default" to="user">添加用户</Link>
                <UserList users={this.state.users}></UserList>
            </div>
        );
    }
});

module.exports = AdministrationPage;