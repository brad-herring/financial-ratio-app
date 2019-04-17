import React from 'react';
import '../App.css';

const Liquidity = props => (
        <div className="liquidity-display">
        {/*Liquidity Ratios*/}
        <h4 id="liquidity-title">Liquidity</h4>
        <p className="liquidity-ratios">Current Ratio: {
        <span className="current-ratio">{ props.currentRatio }</span>
        }</p>

        <p className="liquidity-ratios">Acid Test Ratio: {
        <span className="acid-test">{ props.acidTestRatio }</span>
        }</p>

        <p className="liquidity-ratios">Accounts Receivable Turnover: {
        <span className="AR-turnover">{ props.arTurnover }</span>
        }</p>

        <p className="liquidity-ratios">Inventory Turnover: {
        <span className="inventory-turnover">{ props.inventoryTurnover }</span>
        }</p>

        <p className="liquidity-ratios">Days' Sales Uncollected: {
        <span className="days-sales-uncollected">{ props.daySalesUncollected }</span>
        }</p>

        <p className="liquidity-ratios">Days' Sales in Inventory: {
        <span className="days-sales-inventory">{ props.daySalesInventory }</span>
        }</p>

        <p className="liquidity-ratios">Total Asset Turnover: {
        <span className="total-asset-turnover">{ props.totalAssetTurnover }</span>
        }</p>
      </div>
  );

  export default Liquidity
