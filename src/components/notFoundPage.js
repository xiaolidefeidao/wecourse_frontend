"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var NotFoundPage = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Page not found</h1>

                <p>Sorry, nothing to show here</p>
            </div>
        );
    }
});

module.exports = NotFoundPage;