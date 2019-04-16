import React, { Component } from 'react';
import '../App.css';
import Display from './Display';

class Analytics extends Component {
  state = {
    companyName: undefined,
    revenue: undefined,
    grossProfit: undefined,
    netIncome: undefined,

  }

  getData = async (e) => {
    e.preventDefault();
    const ticker = e.target.elements.ticker.value;

    const income_call = await fetch(`https://cors-anywhere.herokuapp.com/https://financialmodelingprep.com/api/financials/income-statement/${ticker}?period=quarter&datatype=json`);
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
    console.log(balance_data.financials[0]["Cash and cash equivalents"]);
  }

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.getData}>
          <input className="form-control" type="text" name="ticker" placeholder="Company ticker..."/>
          <button id="main-button" className="btn btn-success">Calculate</button>
        </form>

        <Display />
      </div>
    );
  }
}

export default Analytics;
