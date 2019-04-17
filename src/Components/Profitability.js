import React from 'react';
import '../App.css';

const Profitability = props => (
        <div className="profitability-display">
        {/*Profitability Ratios*/}
          <h4 id="profitability-title">Profitability</h4>
          <p className="profitability-ratios">Profit Margin Ratio: {
          <span className="profit-margin">{ props.profitMarginRatio }</span>
          }</p>

          <p className="profitability-ratios">Gross Margin Ratio: {
          <span className="return-on-sales">{ props.grossMarginRatio }</span>
          }</p>

          <p className="profitability-ratios">Return on Total Assets: {
          <span className="return-on-assets">{ props.returnTotalAssets }</span>
          }</p>

          <p className="profitability-ratios">Return on Stockholders' Equity: {
          <span className="return-on-SE">{ props.returnCSHE }</span>
          }</p>
        </div>
  );

  export default Profitability
