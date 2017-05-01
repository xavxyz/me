import { storiesOf } from '@kadira/storybook';
import React from 'react';
import Images from './Images';
import { tools } from './index';

Object.keys(tools).reduce(
  (stories, toolName) =>
    stories.add(`${toolName} selected`, () => <Images tools={tools} active={toolName} />),
  storiesOf('🛠️ Carousel.Images')
);
