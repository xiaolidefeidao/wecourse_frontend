"use strict";

var React = require('react');

var UserList = React.createClass({
    PropTypes: {
        users: React.PropTypes.array.isRequired
    },
    render: function () {


        var createAuthorRow = function (user) {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
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