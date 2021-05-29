import type { FC } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Link } from 'gatsby';
import { Layout } from '../components/Template';

const IndexPage: FC = () => (
  <Layout
    title="Error 404: Page not found"
    description="Error 404: Page not found"
  >
    <Grid container>
      <Grid item md={12}>
        <Typography paragraph variant="h1">
          Error 404
        </Typography>
      </Grid>
      <Grid item md={12}>
        <Typography paragraph variant="h2">
          Page not found.
        </Typography>
      </Grid>
      <Grid item md={12}>
        <Typography paragraph variant="h4">
          It seems like you&apos;ve hit a dead end. There&apos;s nothing to see
          here. The sadness...
        </Typography>
      </Grid>
      <Grid item md={12}>
        <Typography paragraph variant="h4">
          {`Please go back to the `}
          <Link to="/">Home page.</Link>
        </Typography>
      </Grid>
    </Grid>
  </Layout>
);

export default IndexPage;
