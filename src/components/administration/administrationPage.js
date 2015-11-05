"use strict";

var React = require('react');
var UserActions = require('../../actions/userActions');
var UserStore = require('../../stores/userStore');
var UserList = require('./userList');
var Router = require('react-router');
var Link = Router.Link;

var AdministrationPage = React.createClass({
    getInitialState: function () {
        return {
            users: UserStore.getAllUsers()
        };
    },
    componentWillMount: function () {
        UserStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function () {
        UserStore.removeChangeListener(this._onChange);
    },
    _onChange: function () {
        this.setState({users: UserStore.getAllUsers()});
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