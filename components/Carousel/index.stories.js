import { storiesOf, action } from '@kadira/storybook';
import React from 'react';
import Carousel, { PureCarousel } from './index';

export const pickNextMock = action('pick next');
export const pickSpecificMock = name => event => {
  event.stopPropagation();
  action(`pick ${name}`);
};

storiesOf('🛠️ Carousel component')
  .add('tool selected (no handlers)', () => (
    <PureCarousel active="react" pickNext={pickNextMock} pickSpecific={pickSpecificMock} />
  ))
  .add('with timer', () => <Carousel />);
