import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled, { ThemeProvider } from 'styled-components';
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
              <Link href={data.profile} target="_blank" title={name}>
                <Icon key={name} data={data.path} title={name} height="6rem" />
              </Link>
            )}
          </List>
        </Wrap>
      </ThemeProvider>
    );
  }
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 9rem 3rem 3rem 3rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
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
