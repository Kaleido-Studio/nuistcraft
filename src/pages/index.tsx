import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero ', styles.heroBanner)}>
      <div className="container">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption  */}
        <video className={styles.heroLogo} autoPlay loop muted>
          <source src="/img/logo.webm" />
        </video>
        <h1 className="hero__title cubic-font">{siteConfig.title}</h1>
        <p className="hero__subtitle cubic-font">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg cubic-font" to="/docs/intro">
            怎么玩？
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  // const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="NUISTCraft" description="信带的 MC 服务器">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
