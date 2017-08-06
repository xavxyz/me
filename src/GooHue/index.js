import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Goo from './Goo';
import Hue from './Hue';

/*
  
  - Double fork from:
    - Goo Bubble by Chris Gannon: https://codepen.io/chrisgannon/pen/MwMpBQ
    - coolHue by UVDesk/Webkul: https://webkul.github.io/coolhue/
  
  - Data
  
  - Utils
  
  - App (hold the state 🌀)
  
  - Palette (styled-components 💅)
  
  - SVG (GSAP, refs and .map/.reduce over-engineering for the fun 🤙)
  
*/

// app

class GooHue extends Component {
  constructor() {
    super();

    this.state = {
      selectedGooIndex: 0,
    };

    this.handleSelectGoo = this.handleSelectGoo.bind(this);
  }

  handleSelectGoo(selectedGooIndex) {
    return () => {
      this.setState(() => ({ selectedGooIndex }));
    };
  }

  render() {
    const [selectedStart, selectedEnd] = this.props.gooes[
      this.state.selectedGooIndex
    ];

    return (
      <Wrap>
        {!this.props.withoutHue &&
          <Hue
            gooes={this.props.gooes}
            handleSelectGoo={this.handleSelectGoo}
          />}
        <Goo
          selectedStart={selectedStart}
          selectedEnd={selectedEnd}
          bubbles={this.props.bubbles}
        />
      </Wrap>
    );
  }
}

Hue.propTypes = {
  gooes: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

const Wrap = styled.div`flex: 1;`;

export default GooHue;
