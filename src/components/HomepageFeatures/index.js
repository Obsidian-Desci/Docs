import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/obsidian-desci-gift.png').default,
    description: (
      <>
        Obsidian-Desci plugs in web3 and desci projects behind the scenes in obsidian.md, abstracting away their complexities whilst creating a nocode composition environment.
      </>
    ),
  },
  {
    title: 'Collaborate and be Rewarded',
    Svg: require('@site/static/img/obsidian-desci-trophy.png').default,
    description: (
      <>
        Your data has value, Obsidian-Desci strives to become a place not only to consume LLMs together, but to be be compensated for your contributions as well
      </>
    ),
  },
  {
    title: 'Powered by Mimisbrunnr',
    Svg: require('@site/static/img/obsidian-desci-coin.png').default,
    description: (
      <>
        Stake in range Uniswap V3 LP of popular desci projects, receive Mimisbrunnr in return.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Svg} />
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
