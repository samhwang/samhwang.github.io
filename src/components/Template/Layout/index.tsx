import type { FC } from 'react';
import SEO from '../SEO';
import Footer from '../Footer';
import Sidebar from '../Sidebar';
import '../../../assets/sass/resume.scss';
import '../../Icons';
import { useSiteMetadata, usePersonalInformationData } from '../../../hooks';

export type LayoutProps = {
  title: string;
  description: string;
};

const Layout: FC<LayoutProps> = ({ children, title, description }) => {
  const defaultFallback = useSiteMetadata();
  const personalInformation = usePersonalInformationData();

  return (
    <>
      <SEO
        title={title}
        description={description}
        defaultFallback={defaultFallback}
      />
      <div className="main-body">
        <Sidebar personalInformation={personalInformation} />
        <div className="container-fluid p-0">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
