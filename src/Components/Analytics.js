import React, { Component } from 'react';
import '../App.css';
import Display from './Display';

//Liquidity
const current_ratio = (current_assets, current_liabilities) => {
  return current_assets / current_liabilities;
}
const acid_test_ratio = (cash, short_term_investments, current_receivables, current_liabilities) => {
  return (cash + short_term_investments + current_receivables) / current_liabilities;
}
const accounts_receivable_turnover = (net_sales, average_accounts_receivable) => {
  return net_sales / average_accounts_receivable;
}
const inventory_turnover = (cogs, average_inventory) => {
  return cogs / average_inventory;
}
const days_sales_uncollected = (accounts_receivable, net_sales) => {
  return (accounts_receivable / net_sales) * 360;
}
const days_sales_inventory = (ending_inventory, cogs) => {
  return (ending_inventory / cogs) * 360;
}
const total_asset_turnover = (net_sales, average_total_assets) => {
  return net_sales / average_total_assets;
}

//Solvency
const debt_ratio = (total_liabilities, total_assets) => {
  return total_liabilities / total_assets;
}
const equity_ratio = (total_equity, total_assets) => {
  return total_equity / total_assets;
}
const debt_to_equity = (total_liabilities, total_equity) => {
  return total_liabilities / total_equity;
}
const times_interest_earned = (pretax_income, interest_expense) => {
  return pretax_income / interest_expense;
}

//Profitability
const profit_margin_ratio = (net_income, net_sales) => {
  return net_income / net_sales;
}
const gross_margin_ratio = (net_sales, cogs) => {
  return (net_sales - cogs) / net_sales;
}
const return_total_assets = (net_income, average_total_assets) => {
  return net_income / average_total_assets;
}
const return_common_SE = (net_income, preferred_dividends, avg_SE) => {
  return (net_income - preferred_dividends) / avg_SE;
}
const book_value_per_share = (she_common_shares, num_shares_outstanding) => {
  return she_common_shares / num_shares_outstanding;
}
const basic_earnings_per_share = (net_income, preferred_dividends, weighted_avg_shares_outstanding) => {
  return (net_income - preferred_dividends) / weighted_avg_shares_outstanding;
}

class Analytics extends Component {
  state = {
    companyName: undefined,
    companyRating: undefined,
    currentRatio: undefined,
    acidTestRatio: undefined,
    arTurnover: undefined,
    inventoryTurnover: undefined,
    daySalesUncollected: undefined,
    daySalesInventory: undefined,
    totalAssetTurnover: undefined,
    debtRatio: undefined,
    equityRatio: undefined,
    debtToEquity: undefined,
    timesInterestEarned: undefined,
    profitMarginRatio: undefined,
    grossMarginRatio: undefined,
    returnTotalAssets: undefined,
    returnCSHE: undefined,
    bookValuePerShare: undefined,
    basicEarningsPerShare: undefined,
    priceEarningsRatio: undefined,
    dividendYield: undefined
  }

  getData = async (e) => {
    e.preventDefault();
    const ticker = e.target.elements.ticker.value;

    const income_call = await fetch(`https://cors-anywhere.herokuapp.com/https://financialmodelingprep.com/api/financials/income-statement/${ticker}?period=quarter&datatype=json`);
    const income_data = await income_call.json();

    const balance_call = await fetch(`https://cors-anywhere.herokuapp.com/https://financialmodelingprep.com/api/financials/balance-sheet-statement/${ticker}?period=quarter&datatype=json`);
    const balance_data = await balance_call.json();

    const rating_call = await fetch(`https://cors-anywhere.herokuapp.com/https://financialmodelingprep.com/api/company/rating/${ticker}?datatype=json`);
    const rating_data = await rating_call.json();

    const ratio_call = await fetch(`https://cors-anywhere.herokuapp.com/https://financialmodelingprep.com/api/financial-ratios/${ticker}?datatype=json`);
    const ratio_data = await ratio_call.json();

    const name_call = await fetch(`https://cors-anywhere.herokuapp.com/https://financialmodelingprep.com/api/stock/list/all?datatype=json`);
    const name_data = await name_call.json();

    function company_name(ticker) {
      for(var i = 0; i < 7396; i++) {
        if(name_data[i].Ticker === ticker) {
          return name_data[i].companyName;
        }
      }
    }

    const total_assets = balance_data.financials[0]["Total current assets"];
    const current_assets = balance_data.financials[0]["Total current assets"];
    const current_liabilities = balance_data.financials[0]["Total current liabilities"];
    const cash = balance_data.financials[0]["Cash and cash equivalents"];
    const short_term_investments = balance_data.financials[0]["Short-term investments"];
    const receivables = balance_data.financials[0].Receivables;
    const net_sales = income_data.financials[0].Revenue;
    const average_accounts_receivable = (balance_data.financials[0]["Receivables"] + balance_data.financials[1]["Receivables"]) / 2;
    const cogs = income_data.financials[0]["Cost of Revenue"];
    const average_inventory = ((balance_data.financials[0].Inventories + balance_data.financials[1].Inventories) / 2);
    const ending_inventory = balance_data.financials[0].Inventories;
    const average_total_assets = (balance_data.financials[0]["Total assets"] + balance_data.financials[1]["Total assets"]) / 2;
    const total_liabilities = balance_data.financials[0]["Total liabilities"];
    const total_equity = balance_data.financials[0]["Shareholders Equity"];
    const pretax_income = income_data.financials[0]["Earnings before Tax"];
    const interest_expense = income_data.financials[0]["Interest Expense"];
    const net_income = income_data.financials[0]["Net Income"];
    const preferred_dividends = income_data.financials[0]["Preferred Dividends"];

    console.log(income_data);
    console.log(balance_data);
    console.log(rating_data);
    console.log(ratio_data);
    console.log(company_name(ticker));

    this.setState({
      companyName: company_name(ticker),
      companyRating: undefined,
      currentRatio: current_ratio(current_assets, current_liabilities).toFixed(3),
      acidTestRatio: acid_test_ratio(cash, short_term_investments, receivables, current_liabilities).toFixed(3),
      arTurnover:accounts_receivable_turnover(net_sales, average_accounts_receivable).toFixed(3),
      inventoryTurnover: inventory_turnover(cogs, average_inventory).toFixed(3),
      daySalesUncollected: days_sales_uncollected(receivables, net_sales).toFixed(3),
      daySalesInventory: days_sales_inventory(ending_inventory, cogs).toFixed(3),
      totalAssetTurnover: total_asset_turnover(net_sales, average_total_assets).toFixed(3),
      debtRatio: debt_ratio(total_liabilities, total_assets).toFixed(3),
      equityRatio: equity_ratio(total_equity, total_assets).toFixed(3),
      debtToEquity: debt_to_equity(total_liabilities, total_equity).toFixed(3),
      timesInterestEarned: times_interest_earned(pretax_income, interest_expense).toFixed(3),
      profitMarginRatio: profit_margin_ratio(net_income, net_sales).toFixed(3),
      grossMarginRatio: gross_margin_ratio(net_sales, cogs).toFixed(3),
      returnTotalAssets: return_total_assets(net_income, average_total_assets).toFixed(3),
      returnCSHE: undefined,
      bookValuePerShare: undefined,
      basicEarningsPerShare: undefined,
      priceEarningsRatio: ratio_data.financialRatios.TTM.investmentValuationRatios.priceEarningsRatio.toFixed(2),
      dividendYield: ratio_data.financialRatios.TTM.investmentValuationRatios.dividendYield.toFixed(4)
    });
  }

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.getData}>
          <input className="form-control" type="text" name="ticker" placeholder="Company ticker..."/>
          <button id="main-button" className="btn btn-success">Calculate</button>
        </form>

        <Display
        companyName={this.state.companyName}
        companyRating={this.state.companyRating}
        currentRatio={this.state.currentRatio}
        acidTestRatio={this.state.acidTestRatio}
        arTurnover={this.state.arTurnover}
        inventoryTurnover={this.state.inventoryTurnover}
        daySalesUncollected={this.state.daySalesUncollected}
        daySalesInventory={this.state.daySalesInventory}
        totalAssetTurnover={this.state.totalAssetTurnover}
        debtRatio={this.state.debtRatio}
        equityRatio={this.state.equityRatio}
        debtToEquity={this.state.debtToEquity}
        timesInterestEarned={this.state.timesInterestEarned}
        profitMarginRatio={this.state.profitMarginRatio}
        grossMarginRatio={this.state.grossMarginRatio}
        returnTotalAssets={this.state.returnTotalAssets}
        returnCSHE={this.state.returnCSHE}
        bookValuePerShare={this.state.bookValuePerShare}
        basicEarningsPerShare={this.state.basicEarningsPerShare}
        priceEarningsRatio={this.state.priceEarningsRatio}
        dividendYield={this.state.dividendYield}
        />
      </div>
    );
  }
}

export default Analytics;
