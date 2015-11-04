"use strict";

var React = require('react');
var AdministrationApi = require('../../api/administrationApi');

var Administration = React.createClass({
    getInitialState: function () {
        return {
            users: []
        };
    },
    componentWillMount: function () {
        var usersRet = AdministrationApi.getAllUsers();
        console.log(usersRet);
        this.setState({users: usersRet});
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
            <div>
                <h1>
                    Administration
                </h1>
                <table className="table">
                    <thead>
                    <th>Id</th>
                    <th>Name</th>
                    </thead>
                    <tbody>
                    {this.state.users.map(createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = Administration;