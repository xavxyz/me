import { configure } from '@kadira/storybook';
import { injectGlobal } from 'styled-components';
import resets from '../styles/resets';

const req = require.context('../components', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

injectGlobal`${resets}`;

configure(loadStories, module);
