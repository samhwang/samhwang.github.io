import type { FC } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Layout } from '../components/Template';

const IndexPage: FC = () => (
  <Layout title="Sam Huynh" description="Sam Huynh Home Page">
    <Grid container>
      <Typography paragraph variant="h1">
        Hi there.
      </Typography>
      <Typography paragraph variant="body1">
        {/* This is just lorem ipsum */}
        Well, the way they make shows is, they make one show. That show&apos;s
        called a pilot. Then they show that show to the people who make shows,
        and on the strength of that one show they decide if they&apos;re going
        to make more shows. Some pilots get picked and become television
        programs. Some don&apos;t, become nothing. She starred in one of the
        ones that became nothing.
      </Typography>
    </Grid>
  </Layout>
);

export default IndexPage;
