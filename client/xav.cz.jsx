import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';

if (Meteor.isClient) {
  Meteor.startup(function () {
    render(<App />, document.getElementById("render-target"));
  });
}
