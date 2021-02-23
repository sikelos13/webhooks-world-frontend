import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#334747',
      dark: '#abd0ed'
    },
    secondary: {
      main: '#fff',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#ffffff',
    },
  },
    overrides: {
      MuiButton: {
        containedPrimary: {
          color: '#ffffff',
        },
      },
    }
});

export default theme;
