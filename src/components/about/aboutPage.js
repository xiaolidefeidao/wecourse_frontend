"use strict";

var React = require('react');

var AboutPage = React.createClass({
    //statics: {
    //    willTransitionTo: function (transition, params, query, callback) {
    //        if (!confirm("Are you sure?")) {
    //            transition.abort();
    //        } else {
    //            callback();
    //        }
    //    },
    //    willTransitionFrom: function (transition, component) {
    //        if (!confirm("Are you sure Leaving?")) {
    //            transition.abort();
    //        }
    //    }
    //},
    render: function () {
        return (
            <div className="jumbotron">
                <h1>About</h1>

                <p>This Application Using the following technologies:
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Gulp</li>
                        <li>Bootstrap</li>
                    </ul>
                </p>
            </div>
        );
    }
});

module.exports = AboutPage;