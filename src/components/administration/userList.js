"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var UserList = React.createClass({
    PropTypes: {
        users: React.PropTypes.array.isRequired
    },
    render: function () {

        var createAuthorRow = function (user) {
            return (
                <tr key={user.id}>
                    <td><Link to="editUser" params={{id: user.id}}>{user.id}</Link></td>
                    <td>{user.firstName + ' ' + user.lastName}</td>
                </tr>
            );
        };

        return (
            <table className="table">
                <thead>
                <th>Id</th>
                <th>Name</th>
                </thead>
                <tbody>
                {this.props.users.map(createAuthorRow)}
                </tbody>
            </table>
        );
    }
});

module.exports = UserList;