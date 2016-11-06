const React = require('react');
const ReactDOM = require('react-dom');
const { Route, Router, IndexRoute, hashHistory } = require('react-router');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// Custom css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <p>Boilerplate3</p>,
  document.getElementById('app')
);
//require('./redux-example.jsx');
require('./redux-todo-example.jsx');
