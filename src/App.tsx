import {useState} from 'react';
import "@fontsource/roboto";
import {BrowserRouter as Router} from "react-router-dom";
import {AppRoutes} from "./routes";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {CssBaseline } from "@mui/material";
import ResponsiveHeader from "./components/ResponsiveHeader.tsx";
import {darkTheme, lightTheme} from "./utils/themes.ts";


const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const HeaderProps = {
    changeTheme,
    isDarkTheme
  }

  return (
      <ThemeProvider theme={isDarkTheme ? createTheme(darkTheme) : createTheme(lightTheme)}>
        <CssBaseline />
        <Router>
          <ResponsiveHeader {...HeaderProps} />
          <AppRoutes />
        </Router>
      </ThemeProvider>
  )
}

export default App
