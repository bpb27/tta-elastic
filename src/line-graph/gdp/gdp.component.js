import React from 'react';
import LineGraph from 'components/line-graph';

// TODO: source link to public file

export default class Gdp extends React.Component {
  render () {
    return (
      <div id="graph-gdp">
        <LineGraph
          data={data}
          formatter={value => `$${value} tril`}
          id="gdp"
          name="GDP"
          title="US GDP 2000-2019"
        />
      </div>
    );
  }
}

const data = [
  { x: 2000, y: 10.25 },
  { x: 2001, y: 10.58 },
  { x: 2002, y: 10.93 },
  { x: 2003, y: 11.45 },
  { x: 2004, y: 12.21 },
  { x: 2005, y: 13.03 },
  { x: 2006, y: 13.81 },
  { x: 2007, y: 14.45 },
  { x: 2008, y: 14.71 },
  { x: 2009, y: 14.44 },
  { x: 2010, y: 14.99 },
  { x: 2011, y: 15.54 },
  { x: 2012, y: 16.19 },
  { x: 2013, y: 16.78 },
  { x: 2014, y: 17.52 },
  { x: 2015, y: 18.22 },
  { x: 2016, y: 18.71 },
  { x: 2017, y: 19.51 },
  { x: 2018, y: 20.58 },
  { x: 2019, y: 21.25, projected: true },
];

// https://www.bea.gov/data/gdp
// projected: https://www.statista.com/statistics/216985/forecast-of-us-gross-domestic-product/
