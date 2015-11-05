"use strict";

var React = require('react');
var UserActions = require('../../actions/userActions');
var UserStore = require('../../stores/userStore');
var Router = require('react-router');
var UserForm = require('./userForm');
var toastr = require('toastr');

var ManageUserPage = React.createClass({
    mixins: [
        Router.Navigation
    ],
    statics: {
        willTransitionFrom: function (transition, component) {
            if (component.state.dirty && !confirm('Leave without saving?')) {
                transition.abort();
            }
        }
    },
    getInitialState: function () {
        return {
            user: {
                id: "",
                firstName: "",
                lastName: ""
            },
            errors: {},
            dirty: false
        };
    },
    componentWillMount: function () {
        var userId = this.props.params.id;

        if (userId) {
            this.setState({user: UserStore.getUserById(userId)});
        }
    },
    setUserState: function (event) {
        var field = event.target.name;
        var value = event.target.value;
        this.state.user[field] = value;
        this.setState({user: this.state.user});
        this.setState({dirty: true});
    },
    userFormIsValid: function () {
        var formIsValid = true;

        this.state.errors = {};
        if (this.state.user.firstName.length < 2) {
            this.state.errors.firstName = 'Too short for first name';
            console.log('Too short for first name');
            formIsValid = false;
        }
        if (this.state.user.lastName.length < 2) {
            this.state.errors.lastName = 'Too short for last name';
            console.log('Too short for last name');
            formIsValid = false;
        }

        this.setState({errors: this.state.errors});

        return formIsValid;
    },
    saveUser: function (event) {
        event.preventDefault();

        if (!this.userFormIsValid()) {
            return;
        }

        UserActions.createUser(this.state.user);

        this.setState({dirty: false});
        toastr.success('User Saved!');
        this.transitionTo('administration');
    },
    render: function () {
        return (
            <div>
                <div className="jumbotron">
                    <h1>Manage User</h1>
                </div>
                <UserForm user={this.state.user}
                          errors={this.state.errors}
                          onChange={this.setUserState}
                          onSave={this.saveUser}
                    />
            </div>
        );
    }
});

module.exports = ManageUserPage;