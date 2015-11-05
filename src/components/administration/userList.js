"use strict";

var React = require('react');
var Router = require('react-router');
var UserActions = require('../../actions/userActions');
var Link = Router.Link;
var toastr = require('toastr');

var UserList = React.createClass({
    PropTypes: {
        users: React.PropTypes.array.isRequired,
        onDelete: React.PropTypes.func.isRequired
    },
    render: function () {
        var deleteUser = function (id, event) {
                event.preventDefault();

                UserActions.deleteUser(id);
                toastr.success('User Deleted!');
            };

        var createUserRow = function (user) {
            return (
                <tr key={user.id}>
                    <td><Link to="editUser" params={{id: user.id}}>{user.id}</Link></td>
                    <td>{user.firstName + ' ' + user.lastName}</td>
                    <td>
                        <a href="#" onClick={deleteUser.bind(this, user.id)}>Delete</a>
                    </td>
                </tr>
            );
        };

        return (
            <table className="table">
                <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Operation</th>
                </thead>
                <tbody>
                {this.props.users.map(createUserRow)}
                </tbody>
            </table>
        );
    }
});

module.exports = UserList;