import { storiesOf } from '@storybook/react';
import React from 'react';
import Hello from './index';

storiesOf('Hello', module)
  .add('JavaScript Explorer', () => <Hello title="JavaScript Explorer" />)
  .add('Web Explorer', () => <Hello title="Web Explorer" />)
  .add('Internet Explorer', () => <Hello title="Internet Explorer" />);
