import type { FC } from 'react';
import { CssBaseline, Container, Grid } from '@material-ui/core';
import Header from '../Header';
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
      <SEO
        title={title}
        description={description}
        defaultFallback={defaultFallback}
      />
      <Header />
      <Container maxWidth="md">
        <Grid container>{children}</Grid>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
