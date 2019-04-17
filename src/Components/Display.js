import React from 'react';
import '../App.css';
import Profitability from './Profitability'
import Liquidity from './Liquidity'
import Solvency from './Solvency'
import Market from './Market'

const Display = props => (
      <div className="display">
        <h2 className="analysis-title">Analysis</h2>
        <hr/>

        <Profitability
        profitMarginRatio={props.profitMarginRatio}
        grossMarginRatio={props.grossMarginRatio}
        returnTotalAssets={props.returnTotalAssets}
        returnCSHE={props.returnCSHE}
        bookValuePerShare={props.bookValuePerShare}
        basicEarningsPerShare={props.basicEarningsPerShare}
        />
        <hr/>

        <Liquidity
        currentRatio={props.currentRatio}
        acidTestRatio={props.acidTestRatio}
        arTurnover={props.arTurnover}
        inventoryTurnover={props.inventoryTurnover}
        daySalesUncollected={props.daySalesUncollected}
        daySalesInventory={props.daySalesInventory}
        totalAssetTurnover={props.totalAssetTurnover}
        />
        <hr/>

        <Solvency
        debtRatio={props.debtRatio}
        equityRatio={props.equityRatio}
        debtToEquity={props.debtToEquity}
        timesInterestEarned={props.timesInterestEarned}
        />
        <hr/>

        <Market
        priceEarningsRatio={props.priceEarningsRatio}
        dividendYield={props.dividendYield}
        />

      </div>
);

export default Display;
