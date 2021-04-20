import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff',
      dark: '#000000',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: ['Muli', 'Saira Extra Condensed', 'Roboto'].join(','),
  },
});

export default theme;
