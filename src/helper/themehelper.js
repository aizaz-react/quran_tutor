import { createTheme } from '@mui/material';
import localFont from 'next/font/local';
const Cour = localFont({ src: '../assets/fonts/cour.ttf' });

const { breakpoints } = createTheme();

export const darkTheme = createTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 475,
      md: 769,
      lg: 1024,
      xlg: 1050
    }
  },
  palette: {
    common: {
      black: '#000',
      white: '#fff',
      orange: '#E64A19',
      yellow: '#FF8F00',
      green: '#827717',
      blue: '#3949AB',
      purple: '#6A1B9A',
      pink: '#880E4F',
      gray: '#888888'
    },
    primary: {
      main: '#6B9080',
      footer: '#002855',
      contrastText: '#fff'
    },
    secondary: {
      main: '#0353A4',
      contrastText: '#fff'
    },
    error: {
      main: '#f44336',
      contrastText: '#fff'
    },
    text: {
      primary: '#979DAC',
      secondary: '#979DAC',
      disabled: '#9B9B9B',
      hint: 'rgba(0, 0, 0, 0.38)',
      drawerText: '#9B9B9B',
      iconColor: '#a4a4a4',
      success: '#388E3C'
    },
    divider: '#999999',
    background: {
      paper: '#EAF4F4',
      default: '#EAF4F4',
      header: '#EAF4F4'
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(0, 0, 0, 0.14)',
      disabled: 'gray',
      disabledBackground: '#F12E39'
    }
  },
  typography: {
    display1: {
      fontFamily: '"Oswald", sans-serif',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '.9rem',
      lineHeight: '1.5em',
      color: '#6B9080',
      [breakpoints.down('xs')]: {
        fontSize: '.8rem'
      }
    },
    display1Description: {
      fontFamily: '"Oswald", sans-serif',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '1.5rem',
      lineHeight: '2rem',
      color: '#6B9080',
      [breakpoints.down('lg')]: {
        fontSize: '1.2rem',
        lineHeight: '2rem'
      },
      [breakpoints.down('md')]: {
        fontSize: '1.1rem',
        lineHeight: '1.6rem'
      },
      [breakpoints.down('sm')]: {
        fontSize: '.65rem',
        lineHeight: '1.55em'
      }
    },
    display2: {
      fontFamily: '"Ubuntu", sans-serif',
      fontStyle: 'normal',
      fontSize: '1.2rem',
      color: '#6B9080',
      [breakpoints.down('sm')]: {
        fontSize: '5rem'
      }
    },
    display2heading: {
      fontFamily: '"Ubuntu", sans-serif',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '3.5rem',
      lineHeight: '3.5rem',
      color: '#6B9080',
      [breakpoints.down('lg')]: {
        fontSize: '3.5rem',
        lineHeight: '3.7rem'
      },
      [breakpoints.up('lg')]: {
        fontSize: '4rem',
        lineHeight: '4rem'
      },
      [breakpoints.down('md')]: {
        fontSize: '2.9rem',
        lineHeight: '3.5rem'
      },
      [breakpoints.down('sm')]: {
        fontSize: '1.5rem',
        lineHeight: '1.7rem !important'
      }
    },
    display3: {
      fontFamily: '"Courier New"',
      color: '#6B9080'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: '"Courier New"';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Raleway'), local('Raleway-Regular'), url(${Cour}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            border: '1px solid gray',
            background: '#252525'
          }
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          input: {
            '&:-webkit-autofill': {
              WebkitBoxShadow: '0 0 0 100px #000 inset',
              WebkitTextFillColor: '#6B9080'
            }
          }
        }
      }
    }
  }
});

export const lightTheme = createTheme({
  breakpoints: {
    values: {
      smLaptop: 768,
      mdLaptop: 1024,
      lgLaptop: 1440,
      xlLaptop: 1920,
      sxlLaptop: 2722
    }
  },
  palette: {
    common: {
      black: '#000',
      white: '#fff',
      orange: '#E64A19',
      yellow: '#FF8F00',
      green: '#827717',
      blue: '#3949AB',
      purple: '#6A1B9A',
      pink: '#880E4F'
    },
    mode: 'light',
    primary: {
      main: '#B71C1C',
      contrastText: '#fff'
    },
    secondary: {
      main: '#f50057',
      contrastText: '#fff'
    },
    error: {
      main: '#f44336',
      contrastText: '#fff'
    },

    text: {
      primary: '#000',
      secondary: '#9B9B9B',
      disabled: 'lightgray',
      hint: 'rgba(0, 0, 0, 0.38)',
      drawerText: '#0F0F13',
      iconColor: '#B9B9B9',
      success: '#388E3C'
    },
    divider: '#999999',
    background: {
      paper: '#ffffff',
      default: '#FFFFFF',
      header: '#F2F3F7'
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(0, 0, 0, 0.14)',
      disabled: 'gray',
      disabledBackground: '#F12E39'
    }
  },
  typography: {
    display1: {
      fontFamily: '"Oswald", sans-serif'
    },
    display2: {
      fontFamily: '"Ubuntu", sans-serif'
    },
    display3: {
      fontFamily: '"Courier New", monospace'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: '"Courier New"';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Raleway'), local('Raleway-Regular'), url(${Cour}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            border: '1px solid gray',
            background: 'lightgray'
          }
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          input: {
            '&:-webkit-autofill': {
              WebkitBoxShadow: '0 0 0 100px #fff inset',
              WebkitTextFillColor: '#000'
            }
          }
        }
      }
    }
  }
});
