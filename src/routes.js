"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var Route = Router.Route;

var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/homePage')}></DefaultRoute>

        <Route name="administration" handler={require('./components/administration/administrationPage')}></Route>
        <Route name="about" handler={require('./components/about/aboutPage')}></Route>
        <Route name="user" path="user" handler={require('./components/administration/manageUserPage')}></Route>
        <Route name="editUser" path="user/:id" handler={require('./components/administration/manageUserPage')}></Route>

        <NotFoundRoute handler={require('./components/notFoundPage')}></NotFoundRoute>

        <Redirect from="admin" to="administration"></Redirect>
        <Redirect from="home" to="app"></Redirect>
    </Route>
);

module.exports = routes;
