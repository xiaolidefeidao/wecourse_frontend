"use strict";

var React = require('react');
var Input = require('../common/textInput');

var UserForm = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Manage User</h1>

                <form>
                    <Input name="firstName" label="First Name" value={this.props.user.firstName}
                           error={this.props.errors.firstName}
                           onChange={this.props.onChange}/>
                    <Input name="lastName" label="Last Name" value={this.props.user.lastName}
                           error={this.props.errors.firstName}
                           onChange={this.props.onChange}/>
                    <input onClick={this.props.onSave} type="submit" value="Save" className="btn btn-default"/>
                </form>
            </div>
        );
    }
});

module.exports = UserForm;