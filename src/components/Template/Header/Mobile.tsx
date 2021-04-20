import { useState } from 'react';
import type { MouseEvent } from 'react';
import {
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  createStyles,
  makeStyles,
} from '@material-ui/core';
import type { Theme } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { Link } from 'gatsby';
import type { NavItem } from '.';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(1),
    },
    listItem: {
      backgroundColor: 'secondary',
      color: '#000',
      textDecoration: 'none',
    },
    emptySpace: {
      flexGrow: 1,
    },
  })
);

function Mobile({ menuItems }: { menuItems: NavItem[] }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleMenu = (event: MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const open = Boolean(anchorEl);
  const closeMenu = () => setAnchorEl(null);

  return (
    <>
      <IconButton
        className={classes.menuButton}
        edge="start"
        color="inherit"
        aria-label="mobile menu icon"
        aria-controls="mobile-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="mobile-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={closeMenu}
        color="inherit"
      >
        {menuItems.map(({ name, link }) => (
          <MenuItem
            key={name}
            style={{
              backgroundColor: 'secondary',
              color: '#ffffff',
            }}
          >
            <Typography>
              <Link to={link} className={classes.listItem}>
                {name}
              </Link>
            </Typography>
          </MenuItem>
        ))}
      </Menu>
      <Grid className={classes.emptySpace} />
    </>
  );
}

export default Mobile;
