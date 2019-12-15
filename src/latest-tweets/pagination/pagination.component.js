import React from 'react';
import { func, number } from 'prop-types';
import Button from 'components/button';
import styles from './pagination.style.scss';

export default class Pagination extends React.Component {
  static propTypes = {
    currentPage: number.isRequired,
    setPage: func.isRequired,
    totalPages: number.isRequired,
  }

  // first page is 0 (zero-indexed)
  render () {
    const { currentPage, setPage, totalPages } = this.props;
    const prevDisabled = currentPage - 1 < 0;
    const nextDisabled = currentPage + 1 > totalPages;

    return (
      <div className={styles.pagination}>
        <Button disabled={prevDisabled} onClick={() => setPage(currentPage - 1)}>Prev</Button>
        <Button disabled={nextDisabled} onClick={() => setPage(currentPage + 1)}>Next</Button>
      </div>
    );
  }
}
