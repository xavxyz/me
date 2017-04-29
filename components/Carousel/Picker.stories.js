import { storiesOf } from '@kadira/storybook';
import React from 'react';
import Picker from './Picker';
import { tools } from './index';
import { pickSpecificMock } from './index.stories';

Object.keys(tools).reduce(
  (stories, toolName) =>
    stories.add(`${toolName} selected`, () => (
      <Picker active={toolName} tools={tools} pickSpecific={pickSpecificMock} />
    )),
  storiesOf('🛠️ Carousel.Picker')
);
