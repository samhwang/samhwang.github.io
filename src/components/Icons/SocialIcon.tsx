import type { FC } from 'react';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { createStyles, makeStyles } from '@material-ui/core';
import {
  LinkedIn as LinkedInIcon,
  GitHub as GithubIcon,
  Email as EmailIcon,
  CloudDownload as CloudDownloadIcon,
} from '@material-ui/icons';
import type { SvgIconTypeMap, Theme } from '@material-ui/core';
import type { OverridableComponent } from '@material-ui/core/OverridableComponent';

export interface SocialLinkProps {
  name: string;
  url: string;
}

type MaterialIconType = OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;

function getIconFromName(name: string): MaterialIconType | undefined {
  // eslint-disable-next-line default-case
  switch (name.toLowerCase()) {
    case 'github':
      return GithubIcon;

    case 'linkedin':
      return LinkedInIcon;

    case 'pdf':
      return CloudDownloadIcon;

    case 'email':
      return EmailIcon;

    default:
      return undefined;
  }
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      fontSize: theme.spacing(10),
      margin: theme.spacing(3),
      color: '#cccccc',
      '&:hover': {
        color: theme.palette.primary.main,
      },
    },
  })
);

const SocialIcon: FC<SocialLinkProps> = ({ name, url }) => {
  const TheIcon = getIconFromName(name);
  const classes = useStyles();

  if (!TheIcon) {
    return <></>;
  }

  return (
    <OutboundLink href={url} alt={`${name} link`}>
      <TheIcon className={classes.icon} />
    </OutboundLink>
  );
};

export default SocialIcon;
