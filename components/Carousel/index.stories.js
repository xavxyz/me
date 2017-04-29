import { storiesOf, action } from '@kadira/storybook';
import React from 'react';
import Carousel, { tools } from './index';

export const pickNextMock = action('pick next');
export const pickSpecificMock = name => action(`pick ${name}`);

Object.keys(tools).reduce(
  (stories, toolName) =>
    stories.add(`${toolName} selected`, () => (
      <Carousel active={toolName} pickNext={pickNextMock} pickSpecific={pickSpecificMock} />
    )),
  storiesOf('🛠️ Carousel component')
);
