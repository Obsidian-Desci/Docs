import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [

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

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Svg} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
