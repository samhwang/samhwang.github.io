import type { FC } from 'react';
import SEO from '../SEO';
import Footer from '../Footer';
import '../../../assets/sass/resume.scss';
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
      <SEO
        title={title}
        description={description}
        defaultFallback={defaultFallback}
      />
      <div className="main-body">
        <div className="container-fluid p-0">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
