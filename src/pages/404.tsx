import Layout from '../components/Template/Layout';

function IndexPage() {
  const sections = [
    {
      id: '404',
      content: (
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center">
          <header className="major">
            <h2>Error 404: Page not found.</h2>
            <h3>
              It seems like you&apos;ve hit a dead end. There&apos;s nothing to
              see here.
            </h3>
            <h4>
              {`Please go back to the `}
              <a href="/">Home page.</a>
            </h4>
          </header>
        </section>
      ),
    },
  ];

  return <Layout sections={sections} />;
}

export default IndexPage;
