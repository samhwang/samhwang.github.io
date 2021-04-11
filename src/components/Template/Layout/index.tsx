import type { FC } from 'react';
import { CssBaseline, Container, Grid } from '@material-ui/core';
import SEO from '../SEO';
import Footer from '../Footer';
import '../../Icons';
import { useSiteMetadata } from '../../../hooks';

export type LayoutProps = {
  title: string;
  description: string;
};

const Layout: FC<LayoutProps> = ({ children, title, description }) => {
  const defaultFallback = useSiteMetadata();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <SEO
          title={title}
          description={description}
          defaultFallback={defaultFallback}
        />
        <Grid container>
          {children}
          <Footer />
        </Grid>
      </Container>
    </>
  );
};

export default Layout;
