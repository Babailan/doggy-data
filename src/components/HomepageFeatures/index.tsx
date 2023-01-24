import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import logo from '../../../static/img/logo.png';

type FeatureItem = {
  title: string;
  img: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    img: logo,
    description: (
      <>
        Dog API is a user-friendly
        that makes it simple for users to navigate and 
        understand the functionality of the API. 
      </>
    ),
  },
  {
    title: 'Unlimited request',
    img: logo,
    description: (
      <>
        Allows users to make an unlimited number of requests 
        to the API without any restrictions.
      </>
    ),
  },
  {
    title: 'Breed information',
    img: logo,
    description: (
      <>
        Retrieve information about specific 
        dog breeds, such as history, 
        physical characteristics, 
        and personality traits.
      </>
    ),
  },
];

function Feature({title, img, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={img} />
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
