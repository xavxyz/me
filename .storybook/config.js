import { configure, addDecorator } from '@kadira/storybook';
import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import resets from '../styles';

const req = require.context('../components', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

injectGlobal`${resets}`;

const StoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

addDecorator(story => <StoryWrapper>{story()}</StoryWrapper>);

configure(loadStories, module);
