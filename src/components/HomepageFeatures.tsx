import clsx from 'clsx';
import React from 'react';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '专业团队',
    image: '/img/Hausemaster.png',
    description: (
      <>
        Hosted with love and passion
        <br />
        持续维护
      </>
    ),
  },
  {
    title: '提供整合包',
    image: '/img/Enderchest.webp',
    description: (
      <>
        提供一流的原版游戏体验
        <br />
        存档备份 地毯增强 等等功能也都有
      </>
    ),
  },
  {
    title: '生电友好',
    image: '/img/Redstone.webp',
    description: (
      <>
        宽松的生电规则
        <br />
        不玩崩服随便玩
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
          {FeatureList.map((props) => (
            <Feature {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
