import { createTheme } from '@material-ui/core/styles'

declare module "@material-ui/core/styles/createBreakpoints" {
  interface BreakpointOverrides {
    xs: false; 
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
        sm: 375,
        md: 768,
        lg: 1024,
        xl: 1280,
    }
  },
})