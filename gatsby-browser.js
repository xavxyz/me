import ReactGA from 'react-ga';
ReactGA.initialize('UA-83527032-1');

exports.onRouteUpdate = (state, page, pages) => {
  ReactGA.pageview(state.pathname);
};
