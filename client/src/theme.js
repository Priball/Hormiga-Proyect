import {createTheme } from '@mui/material';
import { deepOrange } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
          main: deepOrange[600],
        },
        secondary: {
          main: '#BF360C',
        },
        hGrey: {
          main: deepOrange[500],
        }
      },
});