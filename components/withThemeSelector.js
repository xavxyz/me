import { compose, withState, withHandlers } from 'recompose';
import themesList from '../styles/themes';

const [firstTheme] = themesList;

const withThemeSelector = compose(
  withState('currentTheme', 'updateCurrentTheme', firstTheme),
  withHandlers({
    selectTheme: ({ updateCurrentTheme }) => theme => () => updateCurrentTheme(theme),
  })
);

export default withThemeSelector;
