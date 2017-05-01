// not used atm

import React from 'react';
import PropTypes from 'prop-types';
import { compose, withState, withHandlers } from 'recompose';
import styled, { withTheme } from 'styled-components';
import themesList from '../../styles/themes';

const ThemeSwitcher = ({ selectedTheme, selectTheme }) => (
  <SwitchContent>
    <ThemeList viewBox={`0 0 ${12 * themesList.length} 12`}>
      {themesList.map((theme, index) => (
        <ThemeSample
          key={theme.id}
          r={4}
          cx={6 + 12 * index}
          cy={6}
          fill={theme.main}
          stroke={theme.main}
          strokeWidth={theme.id === selectedTheme ? 2 : 1}
          onClick={selectTheme(theme.id)}
        />
      ))}
    </ThemeList>
  </SwitchContent>
);

ThemeSwitcher.propTypes = {
  selectedTheme: PropTypes.string,
  selectTheme: PropTypes.func,
};

const SwitchContent = styled.div`
  display: flex;
  align-items: center;
  top: 1rem;
  left: 1rem;
`;

const ThemeList = styled.svg`
  height: 2rem;
`;

const ThemeSample = styled.circle`
  cursor: pointer;
  transition: all .2s ease-in-out;
`;

const [firstTheme] = themesList;

export default compose(
  withTheme,
  withState('selectedTheme', 'updateThemeSelected', firstTheme.id),
  withHandlers({
    selectTheme: ({ updateThemeSelected }) => themeId => () => updateThemeSelected(themeId),
  })
)(ThemeSwitcher);
