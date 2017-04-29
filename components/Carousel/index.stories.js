import { storiesOf } from '@kadira/storybook';
import React from 'react';
import Carousel from './index';

storiesOf('🛠️ Carousel component')
  .add('React selected', () => <Carousel active="react" />)
  .add('GraphQL selected', () => <Carousel active="graphql" />)
  .add('Elm selected', () => <Carousel active="elm" />);
