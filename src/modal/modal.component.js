import React from 'react';
import { func, node, string } from 'prop-types';
import Button from 'components/button';
import Icon from 'components/icon';
import styles from './modal.style.scss';

export default class Modal extends React.Component {
  static propTypes = {
    children: node.isRequired,
    closeModal: func.isRequired,
    footerText: string,
    headerText: string,
  }

  render () {
    const { children, closeModal, footerText, headerText } = this.props;
    return (
      <div className={styles.modal}>
        <header>
          { headerText && <h2>{ headerText }</h2> }
          <Icon name="CLOSE_BUTTON" onClick={closeModal} />
        </header>
        <main>
          { children }
        </main>
        <footer>
          { footerText && <h6>{ footerText }</h6> }
          <Button onClick={closeModal}>Close</Button>
        </footer>
      </div>
    );
  }
}
