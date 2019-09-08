import React from 'react';
import { shallow } from 'enzyme';
import Tweet from './tweet.component';
import { formatNumber, parseQuery, parseText } from './tweet.utils';

const createProps = () => ({
  data: {
    date: 1558291837000, // May 19th 2019, 11:50:37 am
    device: 'Twitter for Android',
    favorites: 2,
    id: '1',
    isRetweet: false,
    retweets: 3,
    text: 'merry christmas you filthy animal',
  },
  index: 4,
  search: 'filthy',
});

describe('Tweet', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<Tweet {...props} />);
    const element = wrapper.find('.tweet');
    expect(element.exists()).toEqual(true);
  });

  it('renders index', () => {
    const props = createProps();
    const wrapper = shallow(<Tweet {...props} />);
    const index = wrapper.find('.index').text();
    expect(index).toEqual('4.');
  });

  it('renders a formatted date', () => {
    const props = createProps();
    const wrapper = shallow(<Tweet {...props} />);
    const date = wrapper.find('.date').text();
    expect(date).toContain('May 19th 2019');
  });

  it('renders the device', () => {
    const props = createProps();
    const wrapper = shallow(<Tweet {...props} />);
    const date = wrapper.find('.device').text();
    expect(date).toContain(props.data.device);
  });

  it('renders the retweet count', () => {
    const props = createProps();
    const wrapper = shallow(<Tweet {...props} />);
    const retweets = wrapper.find('.stats span').at(0).text();
    expect(Number(retweets)).toEqual(props.data.retweets);
  });

  it('renders the favorite count', () => {
    const props = createProps();
    const wrapper = shallow(<Tweet {...props} />);
    const favorites = wrapper.find('.stats span').at(1).text();
    expect(Number(favorites)).toEqual(props.data.favorites);
  });

  it('formats larger numbers', () => {
    const props = createProps();
    props.data.favorites = 3100;
    const wrapper = shallow(<Tweet {...props} />);
    const favorites = wrapper.find('.stats span').at(1).text().trim();
    expect(favorites).toEqual('3.1k');
  });

  it('renders link to twitter', () => {
    const props = createProps();
    const wrapper = shallow(<Tweet {...props} />);
    const link = wrapper.find('a').props().href;
    expect(link).toEqual('https://twitter.com/realdonaldtrump/status/1');
  });

  it('renders the text', () => {
    const props = createProps();
    const wrapper = shallow(<Tweet {...props} />);
    const text = wrapper.find('Highlighter').props().textToHighlight;
    expect(text).toEqual(props.data.text);
  });

  it('highlights a single word', () => {
    const props = { ...createProps(), search: 'filthy' };
    const wrapper = shallow(<Tweet {...props} />);
    const highlight = wrapper.find('Highlighter').props().searchWords;
    expect(highlight).toEqual([props.search]);
  });

  it('highlights multiple words', () => {
    const props = { ...createProps(), search: 'merry animal' };
    const wrapper = shallow(<Tweet {...props} />);
    const highlight = wrapper.find('Highlighter').props().searchWords;
    expect(highlight).toEqual(props.search.split(' '));
  });
});

describe('Tweet utils', () => {
  describe('formats numbers', () => {
    it('handles no input', () => {
      expect(formatNumber()).toEqual('0');
    });

    it('handles 0 without any special formatting', () => {
      expect(formatNumber(0)).toEqual('0');
    });

    it('handles 999 without any special formatting', () => {
      expect(formatNumber(999)).toEqual('999');
    });

    it('handles 1000 and formats with a k', () => {
      expect(formatNumber(1000)).toEqual('1k');
    });

    it('handles 2222 and formats with a k and decimal', () => {
      expect(formatNumber(2222)).toEqual('2.2k');
    });
  });

  describe('parsing the search query', () => {
    it('handles no input', () => {
      expect(parseQuery()).toEqual([]);
    });

    it('removes double quotes', () => {
      expect(parseQuery('"fox"')).toEqual(['fox']);
    });

    it('removes stars', () => {
      expect(parseQuery('fox*')).toEqual(['fox']);
    });

    it('splits the query on spaces', () => {
      expect(parseQuery('fox news')).toEqual(['fox', 'news']);
    });

    it('splits the query on pluses', () => {
      expect(parseQuery('fox + news')).toEqual(['fox', 'news']);
    });

    it('splits the query on pipes', () => {
      expect(parseQuery('fox | news')).toEqual(['fox', 'news']);
    });

    it('splits the query on multiple operators', () => {
      expect(parseQuery('fox news + cnn | msnbc')).toEqual(['fox', 'news', 'cnn', 'msnbc']);
    });
  });

  describe('parses the tweet text', () => {
    it('handles no input', () => {
      expect(parseText()).toEqual('');
    });

    it('replaces the html entity ampersand with a real ampersand', () => {
      expect(parseText('this &amp; that')).toEqual('this & that');
    });
  });
});
