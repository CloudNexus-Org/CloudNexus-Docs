import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
  borderColor: string;
  iconColor: string;
  iconType: 'check' | 'plus' | 'diamond';
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Clear & Organized',
    description: (
      <>
        Well-structured content that makes it easy to navigate and find what
        you&apos;re looking for. Focus on learning, not searching.
      </>
    ),
    borderColor: '#3b82f6',
    iconColor: '#60a5fa',
    iconType: 'check',
  },
  {
    title: 'Everything You Need',
    description: (
      <>
        Complete guides, tutorials, and API references all in one place for your convenience.
      </>
    ),
    borderColor: '#a855f7',
    iconColor: '#c084fc',
    iconType: 'plus',
  },
  {
    title: 'Modern & Fast',
    description: (
      <>
        Built with modern web technologies for a fast, responsive experience
        that works seamlessly across all devices.
      </>
    ),
    borderColor: '#14b8a6',
    iconColor: '#5eead4',
    iconType: 'diamond',
  },
];

function FeatureIcon({type, color}: {type: 'check' | 'plus' | 'diamond'; color: string}) {
  if (type === 'check') {
    return (
      <div className={styles.iconCircle} style={{backgroundColor: color}}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    );
  }
  if (type === 'plus') {
    return (
      <div className={styles.iconSquare} style={{backgroundColor: color}}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      </div>
    );
  }
  return (
    <div className={styles.iconDiamond} style={{backgroundColor: color}}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L22 12L12 22L2 12L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function Feature({title, description, borderColor, iconColor, iconType}: FeatureItem) {
  return (
    <div className={clsx('col col--12 col--md-4')}>
      <div className={styles.featureCard} style={{borderTopColor: borderColor}}>
        <div className={styles.featureIconWrapper}>
          <FeatureIcon type={iconType} color={iconColor} />
        </div>
        <div className={styles.featureContent}>
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
