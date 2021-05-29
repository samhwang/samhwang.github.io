import type { FC } from 'react';
import {
  Container,
  Typography,
  makeStyles,
  createStyles,
} from '@material-ui/core';
import type { Theme } from '@material-ui/core';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      padding: theme.spacing(3, 2),
      marginTop: 'auto',
    },
  })
);

const Footer: FC = () => {
  const classes = useStyles();
  const GitHubLink = (
    <OutboundLink href="https://github.com/samhwang">Sam Huynh</OutboundLink>
  );

  const GitHubPages = (
    <OutboundLink href="https://pages.github.com/">GitHub Pages.</OutboundLink>
  );

  const GatsbyJSLink = (
    <OutboundLink href="https://www.gatsbyjs.org/">GatsbyJS</OutboundLink>
  );

  return (
    <footer className={classes.footer}>
      <Container maxWidth="md">
        <Typography paragraph variant="body2">
          {`© 2020 `}
          {GitHubLink}
          {`. Built with `}
          {GatsbyJSLink}
          {` and hosted on `}
          {GitHubPages}
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
