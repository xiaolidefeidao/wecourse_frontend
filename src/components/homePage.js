"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
    render: function () {
        return (
            <div className="jumbotron">
                <h1>Wecourse</h1>
                <p>Wecourse frontend</p>
                <Link to="about" className="btn btn-primary">Learn More</Link>
            </div>
        );
    }
});

module.exports = Home;