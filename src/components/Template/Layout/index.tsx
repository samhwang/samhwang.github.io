import type { FC } from 'react';
import {
  CssBaseline,
  Container,
  Grid,
  makeStyles,
  createStyles,
} from '@material-ui/core';
import type { Theme } from '@material-ui/core';
import Header from '../Header';
import SEO from '../SEO';
import Footer from '../Footer';
import '../../Icons';
import { useSiteMetadata } from '../../../hooks';

export type LayoutProps = {
  title: string;
  description: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    main: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(2),
    },
  })
);

const Layout: FC<LayoutProps> = ({ children, title, description }) => {
  const defaultFallback = useSiteMetadata();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <SEO
        title={title}
        description={description}
        defaultFallback={defaultFallback}
      />
      <Header />
      <Container maxWidth="md" component="main" className={classes.main}>
        <Grid container alignItems="center" justify="center" direction="column">
          {children}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
