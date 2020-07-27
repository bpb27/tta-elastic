import React from 'react';
import { number } from 'prop-types';
import SkeletonLoader from 'react-loading-skeleton';
import styles from './skeleton.style.scss';

export default class Skeleton extends React.Component {
  static propTypes = {
    count: number,
    height: number,
    width: number,
  }

  static defaultProps = {
    count: 10,
    height: 25,
    width: 350,
  }

  render () {
    const { count, height, width } = this.props;
    return (
      <div className={styles.skeleton}>
        <SkeletonLoader
          count={count}
          duration={1.5}
          height={height}
          width={width}
        />
      </div>
    );
  }
}
