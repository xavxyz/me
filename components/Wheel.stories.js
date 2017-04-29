import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Wheel from './Wheel';
import recommendations from '../assets/recommendations.json';

storiesOf('Recommendation wheel').add('basic', () => <Wheel recommendations={recommendations} />);
