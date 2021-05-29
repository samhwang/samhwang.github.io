import { AppBar, Slide, Toolbar, useScrollTrigger } from '@material-ui/core';
import { isBrowser, isMobile } from 'react-device-detect';
import Mobile from './Mobile';
import Desktop from './Desktop';

export interface NavItem {
  name: string;
  link: string;
}

function Header() {
  const trigger = useScrollTrigger();
  const menuItems: NavItem[] = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Blog',
      link: '/blog',
    },
    {
      name: 'Resume',
      link: '/resume',
    },
  ];

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar position="static">
        <Toolbar>
          {isBrowser && <Desktop menuItems={menuItems} />}
          {isMobile && <Mobile menuItems={menuItems} />}
        </Toolbar>
      </AppBar>
    </Slide>
  );
}

export default Header;
