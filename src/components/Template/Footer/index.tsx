import type { FC } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

const Footer: FC<{}> = () => {
  const GitHubLink = (
    <OutboundLink href="https://github.com/samhwang">Sam Huynh</OutboundLink>
  );

  const GitHubPages = (
    <OutboundLink href="https://pages.github.com/">GitHub Pages</OutboundLink>
  );

  const GatsbyJSLink = (
    <OutboundLink href="https://www.gatsbyjs.org/">GatsbyJS.</OutboundLink>
  );
  return (
    <Grid container>
      <Typography paragraph variant="body2">
        {`© 2020 `}
        {GitHubLink}
        {`. Hosted on `}
        {GitHubPages}
        {`. Based on `}
        {GatsbyJSLink}
      </Typography>
    </Grid>
  );
};

export default Footer;
