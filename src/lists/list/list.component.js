import React from 'react';
import { node, string } from 'prop-types';
import Icon from 'components/icon';
import './list.style.scss';

export default class List extends React.Component {
  static propTypes = {
    children: node.isRequired,
    className: string,
    header: string.isRequired,
  }

  static defaultProps = {
    className: '',
  }

  state = {
    isShowing: true,
  }

  get icon () {
    if (this.state.isShowing) {
      return <Icon name="DOWN_ARROW" onClick={() => this.setState({ isShowing: false })}/>;
    } else {
      return <Icon name="UP_ARROW" onClick={() => this.setState({ isShowing: true })}/>;
    }
  }

  render () {
    return (
      <div className={`list ${this.props.className}`}>
        <header>
          <h1>{ this.props.header }</h1>
          { this.icon }
        </header>
        <div>
          { this.state.isShowing ? this.props.children : null }
        </div>
      </div>
    );
  }
}
