/*eslint-disable strict*/ //Need Global Vars


var React = require('react');
var Header = require('./common/header.js');
var RouterHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery');

var App = React.createClass({
    render: function () {
        return (
            <div>
                <Header></Header>

                <div className="container-fluid">
                    <RouterHandler></RouterHandler>
                </div>
            </div>
        );
    }
});

module.exports = App;