import {useEffect, useState} from 'react';
import {CssBaseline } from "@mui/material";
import "@fontsource/roboto";
import {BrowserRouter as Router} from "react-router-dom";
import {AppRoutes} from "./routes";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import ResponsiveHeader from "./components/ResponsiveHeader.tsx";
import {darkTheme, lightTheme} from "./utils/themes.ts";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";


const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    const themeType = localStorage.getItem("themeSetting") || "dark";
    if (themeType != "dark") {
      setIsDarkTheme(!isDarkTheme);
    }
  }, [])

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    localStorage.setItem("themeSetting", isDarkTheme ? "light" : "dark");
  };

  const HeaderProps = {
    changeTheme,
    isDarkTheme
  }

  const queryClient = new QueryClient()

  return (
      <ThemeProvider theme={isDarkTheme ? createTheme(darkTheme) : createTheme(lightTheme)}>
        <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <Router>
          <ResponsiveHeader {...HeaderProps} />
          <AppRoutes />
        </Router>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
        </ThemeProvider>

  )
}

export default App
