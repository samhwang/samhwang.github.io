import type { FC } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Layout } from '../components/Template';

const BlogPage: FC = () => (
  <Layout title="Sam Huynh | Blog" description="Sam Huynh Blog">
    <Grid container>
      <Typography paragraph variant="h1">
        This is the blog page
      </Typography>
      <Typography paragraph variant="body1">
        {/* This is just lorem ipsum */}
        Another ipsum
      </Typography>
    </Grid>
  </Layout>
);

export default BlogPage;
