import React from 'react';
import '../App.css';
import Profitability from './Profitability'
import Liquidity from './Liquidity'
import Management from './Managementefficiency'
import Leverage from './Leverage'

const Display = props => (
      <div className="display">
        <h2 className="analysis-title">Analysis</h2>
        <hr/>

        <Profitability />
        <Liquidity />
        <Management />
        <Leverage />
      </div>
);

export default Display;
