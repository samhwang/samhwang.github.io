import { useState } from 'react';
import {
  AppBar,
  IconButton,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
  createStyles,
  makeStyles,
} from '@material-ui/core';
import type { Theme } from '@material-ui/core';
import {
  Menu as MenuIcon,
  Brightness7 as SunIcon,
  Brightness4 as MoonIcon,
} from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

function Header() {
  const classes = useStyles();
  const trigger = useScrollTrigger();
  const [showDarkTheme, setShowDarkTheme] = useState(false);
  const toggleDarkTheme = () =>
    setShowDarkTheme((currentState) => !currentState);

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6">
            Sam Huynh
          </Typography>
          <IconButton
            className={classes.menuButton}
            onClick={toggleDarkTheme}
            edge="end"
            color="inherit"
            aria-label="dark theme toggle"
          >
            {showDarkTheme ? <MoonIcon /> : <SunIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Slide>
  );
}

export default Header;
