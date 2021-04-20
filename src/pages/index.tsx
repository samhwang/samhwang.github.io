import type { FC } from 'react';
// import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { Grid, Typography, Divider } from '@material-ui/core';
import { Layout } from '../components/Template';
import { usePersonalInformationData } from '../hooks';
import SocialIcon from '../components/Icons/SocialIcon';
import type { SocialLinkProps } from '../components/Icons/SocialIcon';

const IndexPage: FC = () => {
  const {
    firstName,
    lastName,
    address,
    email,
    socialLinks,
  } = usePersonalInformationData();
  const fullName = `${firstName} ${lastName}`;
  const socialLinksData: SocialLinkProps[] = [
    ...socialLinks,
    { name: 'email', url: `mailto:${email}` },
  ];

  return (
    <Layout title="Sam Huynh" description="Sam Huynh Home Page">
      <Grid item container md={12} alignContent="center">
        <Typography paragraph variant="h1">
          What&apos;s up?
        </Typography>
        <Typography paragraph variant="h5">
          My name is {`${fullName}`}. I am a Full Stack Software Developer in
          {` ${address}`} and passionate about all things tech and modern
          software development.
        </Typography>
        <Typography paragraph variant="h5">
          I am always looking for new opportunities. Wanna reach me? Just give
          me a shout!
        </Typography>
        <Divider />
      </Grid>
      <Grid item container md={12} alignContent="center" justify="center">
        {socialLinksData.map(({ name, url }) => (
          <Grid key={name} item md>
            <SocialIcon name={name} url={url} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}

export default IndexPage;
