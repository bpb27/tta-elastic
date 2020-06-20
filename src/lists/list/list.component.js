import React from 'react';
import { node, oneOfType, string } from 'prop-types';
import Icon from 'components/icon';
import styles from './list.style.scss';

export default class List extends React.Component {
  static propTypes = {
    button: node,
    buttonTwo: node,
    children: node.isRequired,
    className: string,
    header: oneOfType([string, node]).isRequired,
  }

  static defaultProps = {
    className: '',
  }

  state = {
    isShowing: true,
  }

  get icon () {
    if (this.state.isShowing) {
      return <Icon name="MINUS_CIRCLE" onClick={() => this.setState({ isShowing: false })}/>;
    } else {
      return <Icon name="PLUS_CIRCLE" onClick={() => this.setState({ isShowing: true })}/>;
    }
  }

  render () {
    return (
      <div className={`${styles.list} ${this.props.className}`}>
        <header>
          { this.icon }
          <h1>{ this.props.header }{ this.props.button }{ this.props.buttonTwo }</h1>
        </header>
        <div>
          { this.state.isShowing ? this.props.children : null }
        </div>
      </div>
    );
  }
}
