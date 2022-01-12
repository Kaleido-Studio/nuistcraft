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
    title: '内网直通 / 外网穿透',
    image: '/img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        架设于科协服务器
        <br />
        还可以通过外网穿透来玩
      </>
    ),
  },
  {
    title: '提供整合包',
    image: '/img/undraw_docusaurus_tree.svg',
    description: (
      <>
        我们深知游戏体验的重要性
        <br />
        所以有准备整合包
      </>
    ),
  },
  {
    title: '生电友好',
    image: '/img/undraw_docusaurus_react.svg',
    description: (
      <>
        总有人想用原版完成mod的东西
        <br />
        没关系，这个服提供的权限相当宽松
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
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
