import { Grid, Typography, makeStyles, createStyles } from '@material-ui/core';
import type { Theme } from '@material-ui/core';
import { Link } from 'gatsby';
import type { NavItem } from '.';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(1),
    },
    title: {
      marginRight: theme.spacing(3),
    },
    link: {
      color: theme.palette.primary.contrastText,
      textDecoration: 'none',
      marginRight: theme.spacing(3),
    },
    emptySpace: {
      flexGrow: 1,
    },
  })
);

function Desktop({ menuItems }: { menuItems: NavItem[] }) {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.title} variant="h6">
        Sam Huynh
      </Typography>
      {menuItems.map(({ name, link }) => (
        <Typography key={name} variant="h6">
          <Link to={link} className={classes.link}>
            {name}
          </Link>
        </Typography>
      ))}
      <Grid className={classes.emptySpace} />
    </>
  );
}

export default Desktop;
