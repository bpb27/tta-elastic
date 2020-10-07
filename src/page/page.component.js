import React, { Fragment } from 'react';
import { node, string } from 'prop-types';
import MetaTags from 'react-meta-tags';
import styles from './page.style.scss';

export default class Page extends React.Component {
  static propTypes = {
    children: node.isRequired,
    className: string,
    metaDescription: string.isRequired,
    metaTitle: string.isRequired,
    tabTitle: string.isRequired,
  }

  static defaultProps = {
    className: '',
  }

  render () {
    const { children, className, metaDescription, metaTitle, tabTitle } = this.props;
    return (
      <Fragment>
        <MetaTags>
          <title>TTA - {tabTitle}</title>
          <meta name="description" content={metaDescription} />
          <meta property="og:title" content={metaTitle} />
        </MetaTags>
        <div className={`${styles.page} ${className}`}>
          { children }
        </div>
      </Fragment>
    );
  }
}
