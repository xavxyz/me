import { storiesOf } from '@kadira/storybook';
import React from 'react';
import Picker from './Picker';

storiesOf('🛠️ Carousel.Picker')
  .add('React selected', () => <Picker active="react" />)
  .add('GraphQL selected', () => <Picker active="graphql" />)
  .add('Elm selected', () => <Picker active="elm" />);
