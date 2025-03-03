import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Aceware Internal Documentation
        </Heading>
        <p className="hero__subtitle">
          Welcome to Aceware product and technical documentation. This platform has been prepared as a comprehensive
          information and resource center for our team members.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            Get Started →
          </Link>
        </div>
      </div>
    </header>
  );
}

function DocumentationCategories() {
  return (
    <section className={styles.categories}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <div className={styles.categoryCard}>
              <div className={styles.categoryIcon}>📚</div>
              <Heading as="h2">Product Documentation</Heading>
              <p>Aceware product features, solutions, and user guides</p>
              <Link to="/docs/category/product" className={styles.categoryLink}>
                Product Docs →
              </Link>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.categoryCard}>
              <div className={styles.categoryIcon}>💻</div>
              <Heading as="h2">Technical Documentation</Heading>
              <p>API references, integrations, and developer resources</p>
              <Link to="/docs/category/technical" className={styles.categoryLink}>
                Technical Docs →
              </Link>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.categoryCard}>
              <div className={styles.categoryIcon}>🌟</div>
              <Heading as="h2">Company Culture</Heading>
              <p>Our values, working principles, and processes</p>
              <Link to="/docs/category/culture" className={styles.categoryLink}>
                Culture Docs →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Aceware Documentation`}
      description="Aceware product and technical documentation platform">
      <HomepageHeader />
      <main>
        <DocumentationCategories />
      </main>
    </Layout>
  );
}
