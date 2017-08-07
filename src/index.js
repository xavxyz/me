import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled, { ThemeProvider, keyframes } from 'styled-components';
import Hello from './Hello';
import GooHue from './GooHue';
import Icon from './Icon';
import { bubbles, gooes, icons } from './data';
import './index.css';

const getRandomGoo = gooes => Math.floor(Math.random() * (gooes.length - 1));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGooIndex: getRandomGoo(props.gooes),
    };

    this.handleSelectGoo = this.handleSelectGoo.bind(this);
  }

  handleSelectGoo() {
    this.setState(() => ({
      selectedGooIndex: getRandomGoo(this.props.gooes),
    }));
  }

  render() {
    const [selectedStart, selectedEnd] = this.props.gooes[
      this.state.selectedGooIndex
    ];

    return (
      <ThemeProvider
        theme={{
          selectedStart,
          selectedEnd,
        }}
      >
        <Wrap>
          <Row>
            <Hello
              title={['Web', 'Explorer']}
              handleSelectGoo={this.handleSelectGoo}
            />
            <GooHue
              bubbles={this.props.bubbles}
              gooes={this.props.gooes}
              handleSelectGoo={this.handleSelectGoo}
              withoutHue
            />
          </Row>
          <List>
            {Object.entries(icons).map(([name, data]) =>
              <Link key={name} href={data.profile} target="_blank" title={name}>
                <Icon data={data.path} title={name} height="6rem" />
              </Link>
            )}
          </List>
        </Wrap>
      </ThemeProvider>
    );
  }
}

// could be refactored with GSAP and making things appears one by one
// -> drive attention where I want visitor to look at
const globalAppearIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 3rem;

  animation: ${globalAppearIn} .3s ease-out;

  /* MIN here */
  @media screen and (min-width: 1024px) {
    padding-top: 6rem;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const List = styled.div`
  display: flex;
  justify-content: center;
`;

const Link = styled.a`
  margin: .5rem;
  transition: all .1s ease-out;

  &:hover {
    transition: all .1s ease-in;
    transform: scale(1.2);
  }
`;

ReactDOM.render(
  <App bubbles={bubbles} gooes={gooes} />,
  document.getElementById('root')
);
