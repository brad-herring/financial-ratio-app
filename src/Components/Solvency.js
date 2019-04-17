import React from 'react';
import '../App.css';

const Solvency = props => (
        <div className="solvency-display">
        {/*Solvency/Leverage Ratios*/}
        <h4 id="solvency-title">Solvency</h4>
        <p className="solvency-ratios">Debt Ratio: {
        <span className="debt-ratio">{ props.debtRatio }</span>
        }</p>

        <p className="solvency-ratios">Equity Ratio: {
        <span className="equity-ratio">{ props.equityRatio }</span>
        }</p>

        <p className="solvency-ratios">Debt-to-Equity Ratio: {
        <span className="debt-to-equity">{ props.debtToEquity }</span>
        }</p>

        <p className="solvency-ratios">Times Interest Earned: {
        <span className="times-interest-earned">{ props.timesInterestEarned }</span>
        }</p>
      </div>
  );

  export default Solvency
