import { configure, addDecorator } from '@kadira/storybook';
import React from 'react';
import { injectGlobal } from 'styled-components';
import resets from '../styles';
import { AppWrapper } from '../pages';
const req = require.context('../components', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

injectGlobal`${resets}`;

// const StoryWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   min-height: 100vh;
// `;

addDecorator(story => <AppWrapper>{story()}</AppWrapper>);

configure(loadStories, module);
