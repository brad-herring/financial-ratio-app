import React, { Component } from 'react';
import '../App.css';

class Analytics extends Component {
  state = {
    ticker: "AAPL",
    companyName: undefined,
    revenue: undefined,
    grossProfit: undefined,
    netIncome: undefined,

  }

  getData = async (e) => {
    e.preventDefault();
    const ticker = this.state.ticker;

    const income_call = await fetch(`https://financialmodelingprep.com/api/financials/income-statement/${ticker}?period=quarter&datatype=json`);
    const income_data = await income_call.json();

    const balance_call = await fetch(`https://cors-anywhere.herokuapp.com/https://financialmodelingprep.com/api/financials/balance-sheet-statement/${ticker}?period=quarter&datatype=json`);
    const balance_data = await balance_call.json();

    const cash_call = await fetch(`https://cors-anywhere.herokuapp.com/https://financialmodelingprep.com/api/financials/cash-flow-statement/${ticker}?period=quarter&datatype=json`);
    const cash_data = await cash_call.json();

    const rating_call = await fetch(`https://cors-anywhere.herokuapp.com/https://financialmodelingprep.com/api/company/rating/${ticker}?datatype=json`);
    const rating_data = await rating_call.json();

    console.log(ticker);
    console.log(income_data);
    console.log(balance_data);
    console.log(cash_data);
    console.log(rating_data);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.getData}>
          <button>Calculate</button>
        </form>
      </div>
    );
  }
}

export default Analytics;
