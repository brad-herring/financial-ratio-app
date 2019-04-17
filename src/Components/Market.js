import React from 'react';
import '../App.css';

const Market = props => (
        <div className="market-display">
        {/*Market-Prospect Ratios*/}
        <h4 id="market-title">Market Prospects</h4>
        <p className="market-ratios">Price-Earnings Ratio: {
        <span className="price-earnings">{ props.priceEarningsRatio }</span>
        }</p>

        <p className="market-ratios">Dividend Yield: {
        <span className="dividend-yield">{ props.dividendYield }</span>
        }</p>
      </div>
  );

  export default Market
