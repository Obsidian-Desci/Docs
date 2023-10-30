import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';


import { Web3ReactProvider, Web3ReactHooks } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'
import { hooks as metaMaskHooks, metaMask } from '../connectors/metaMask'
const connectors = [
  [metaMask, metaMaskHooks]
]

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Web3ReactProvider connectors={connectors}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/Quick%20Start">
              Obsidian-Desci Tutorial - 5min ⏱
            </Link>
          </div>
        </div>
      </header>
    </Web3ReactProvider>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
