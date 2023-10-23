import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Obsidian-Desci plugs in web3 and desci project integration behind the scenes in obsidian.md, abstracting away the complexities of blockchain, p2p, and desci.
      </>
    ),
  },
  {
    title: 'Collaborate and be Rewarded',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Your data has value, Desci Obsidian offers an avenue of tools to help you be compensated for creation, verfication and connection of it. 
      </>
    ),
  },
  {
    title: 'Powered by Mimisbrunnr',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Mimisbrunnr in an ERC20 token that wraps a collection of LP tokens from the desci ecosystem.  Fees from this protocol owned liquidity are used to fund the development of Obsidian-Desci and can be unwraped at any time.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
