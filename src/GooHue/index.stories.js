import { storiesOf } from '@storybook/react';
import React from 'react';
import GooHue from './index';
import { gooes, bubbles } from './data';

storiesOf('GooHue', module)
  .add('default', () => <GooHue gooes={gooes} bubbles={bubbles} />)
  .add('without hue', () =>
    <GooHue gooes={gooes} bubbles={bubbles} withoutHue />
  );
