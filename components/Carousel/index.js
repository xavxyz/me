import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import colors from '../../styles/colors';
import Picker from './Picker';
import Images from './Images';

export const tools = {
  react: `React is a JavaScript library making the data flow explictly flow throughout the UI thanks to a component hierarchy.`,
  graphql: `GraphQL specification allows to fetch data efficiently by focusing on the needs of product developers and applications.`,
  elm: `Elm is a ML-style reactive functional language with enforced immutability that compiles down to optimized JavaScript.`,
};

export const PureCarousel = ({ active = 'react', pickNext, pickSpecific }) => {
  return (
    <Frame onClick={pickNext}>
      <Picker active={active} pickSpecific={pickSpecific} tools={tools} />
      <Images active={active} tools={tools} />
    </Frame>
  );
};

const Frame = styled.div`
  display: flex;
  align-items: center;
  max-width: 96rem;
  border: .2rem solid ${colors.transparentDarkRed};
  border-radius: .4rem;
  padding: 2rem 1.5rem;
  cursor: pointer;
  
  /* 
    html font-size is 62.5% (= 10px), why the heck 
    the media query 768px is different from 76.8rem??
  */
  /* @media screen and (max-width: 76.8rem) { */
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

PureCarousel.propTypes = {
  active: PropTypes.string,
  pickNext: PropTypes.func,
  pickSpecific: PropTypes.func,
};

export default props => {
  let currentTimer;

  const timerPickNext = pickNextFn => {
    let timer = setInterval(pickNextFn, 4000);

    return {
      clear: restart => {
        clearInterval(timer);
        if (typeof restart !== 'undefined') {
          timer = setInterval(pickNextFn, 4000);
        }
      },
    };
  };

  const shouldRestartTimer = () => {
    if (typeof currentTimer !== 'undefined') {
      currentTimer.clear(true);
    }
  };

  const ComposedCarousel = compose(
    withState('active', 'setActive', 'react'),
    withHandlers({
      pickSpecific: ({ setActive }) => name => event => {
        event.stopPropagation();
        shouldRestartTimer();

        setActive(name);
      },
      pickNext: ({ active, setActive }) => () => {
        shouldRestartTimer();

        const toolsList = Object.keys(tools);
        const activeToolIndex = toolsList.indexOf(active);
        if (activeToolIndex === toolsList.length - 1) {
          return setActive(toolsList[0]);
        }
        return setActive(toolsList[activeToolIndex + 1]);
      },
    }),
    lifecycle({
      componentDidMount() {
        currentTimer = timerPickNext(this.props.pickNext);
      },
      componentWillUnmount() {
        currentTimer.clear();
      },
    })
  )(PureCarousel);

  return <ComposedCarousel {...props} />;
};
