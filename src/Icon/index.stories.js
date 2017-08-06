import { storiesOf } from '@storybook/react';
import React from 'react';
import Icon from './index';
import icons from '../data/icons';

storiesOf('Icon', module)
  .add('codepen', () => <Icon data={icons['codepen']} />)
  .add('twitter', () => <Icon data={icons['twitter']} />)
  .add('github', () => <Icon data={icons['github']} />);
