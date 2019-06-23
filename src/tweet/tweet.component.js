import React, { Component } from 'react';
import { bool, number, shape, string } from 'prop-types';
import moment from 'moment';
import renderHTML from 'react-render-html';
import './tweet.style.scss';

export default class Tweet extends Component {
  static propTypes = {
    data: shape({
      date: number,
      favorites: number,
      id: number,
      isRetweet: bool,
      retweets: number,
      source: string,
      text: string,
    }),
    index: number,
    search: string,
  }

  static defaultProps = {
    search: '',
  }

  formatCount (num) {
    return num > 999 ? (num/1000).toFixed(1) + 'k' : num;
  }

  get iconHeart () {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.516 3c2.382 0 4.487 1.564 4.487 4.712 0 4.963-6.528 8.297-10.003 11.935-3.475-3.638-10.002-6.971-10.002-11.934 0-3.055 2.008-4.713 4.487-4.713 3.18 0 4.846 3.644 5.515 5.312.667-1.666 2.333-5.312 5.516-5.312zm0-2c-2.174 0-4.346 1.062-5.516 3.419-1.17-2.357-3.342-3.419-5.515-3.419-3.403 0-6.484 2.39-6.484 6.689 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-4.586-3.414-6.689-6.484-6.689z"/></svg>;
  }

  get iconRetweet () {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 11v4h2.953l1.594 2h-6.547v-6h-2l3-4 3 4h-2zm6 2v-4h-2.922l-1.594-2h6.516v6h2l-3 4-3-4h2z"/></svg>;
  }

  get iconTwitter () {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>;
  }

  get text () {
    const search = this.props.search || '';
    let { text } = this.props.data;

    search.split(' ').forEach(keyword => {
      const pattern = new RegExp(`(${keyword})`, 'gi');
      text = text.replace(pattern, '<span className="highlight">$1</span>');
    });

    return renderHTML(text);
  }

  render () {
    const { date, device, favorites, id, retweets } = this.props.data;
    return (
      <div className="tweet" key={id}>
        <div className="index">
          { this.props.index + 1 }.
        </div>
        <div className="metadata">
          <span className="date">{ moment(date, 'x').format('MMM Do YYYY, h:mm:ss a') }</span>
          <span className="device">{ device }</span>
          <span className="stats">
            <span>
              { this.iconRetweet }
              { this.formatCount(retweets) }
            </span>
            <span>
              { this.iconHeart }
              { this.formatCount(favorites) }
            </span>
            <span>
              <a href={`https://twitter.com/realdonaldtrump/status/${id}`} target="_blank" rel="noopener noreferrer">
                { this.iconTwitter }
              </a>
            </span>
          </span>
        </div>
        <div className="text">
          <p>{ this.text }</p>
        </div>
      </div>
    );
  }
}
