import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import GithubIcon from '../assets/github-white.svg'
import {FormControlLabel, FormGroup, Icon, Switch} from "@mui/material";
import {useNavigate} from "react-router-dom";

interface AppBarProps {
  changeTheme: () => void
  isDarkTheme: boolean
}

function ResponsiveAppBar({changeTheme, isDarkTheme}: AppBarProps): JSX.Element {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleCloseNavMenu = () => {
    navigate("/");
    setAnchorElNav(null);
  };

  return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>

            <Icon>
              <img src={GithubIcon} alt="github icon" height={25} width={25} data-testid="header-logo"/>
            </Icon>

            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  ml: 1,
                  mr: 2,
                  mt: .5,
                  display: {xs: 'none', md: 'flex'},
                  fontWeight: 700,
                  letterSpacing: '.2rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
                data-testid="header-h6-text"
            >
              Repository Search
            </Typography>

            {/*Handle responsive menu title*/}
            <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}, justifyContent: 'center'}}>
              <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: {xs: 'block', md: 'none'},
                  }}
              />
            </Box>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: {xs: 'flex', md: 'none'},
                  flexGrow: 1,
                  fontWeight: 700,
                  letterSpacing: '.2rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
            >
              Repository Search
            </Typography>
            <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}/>


            {/* Theme toggle */}
            <Box sx={{flexGrow: 0}}>
              <FormGroup>
                <FormControlLabel
                    control={
                      <Switch checked={isDarkTheme} onChange={changeTheme}/>
                    }
                    label="Dark Theme"
                    data-testid="heading-theme-toggle"
                />
              </FormGroup>

            </Box>

          </Toolbar>
        </Container>
      </AppBar>
      </Box>
  );
}

export default ResponsiveAppBar;
