import React, { Component } from "react";
import logo from "../logo.svg";
import "./FilterableTransactionTable.css";
import TransactionRow from "./TransactionRow.js";
import store from "../store";
import Pagination from "./Pagination";
import data from "../data.json";
import { fetchTransaction } from "../actions/transactionAction";
import {
  updateAccountNameFilter,
  updateTransactionTypeFilter
} from "../action-creator";
import Account from "./Account";
import TransactionType from "./Transactiontype";

class FilterableTransactionTable extends React.Component {
  state = {
    allCountries: [],
    currentCountries: [],
    currentPage: null,
    totalPages: null,
    filteredCountries: []
  };
  constructor(props) {
    super(props);
    store.subscribe(() => {
      console.log(store.getState());
    });
    fetchTransaction();
    store.subscribe(() => {
      this.render();
    });
  }

  componentWillMount() {
    fetchTransaction();
  }
  updateTransactionTypeFilter(e) {
    console.log(e.target.dataset.filter);
    const value = e.target.dataset.filter;
    store.dispatch(updateTransactionTypeFilter(value));
  }
  render = () => {
    if (store.getState().allCountries.length === 0) return null;
    return (
      <div className="container">
        <div className="top_header">
          <h2>My Transactions</h2>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="row">
              <Account />
              <TransactionType />
            </div>
          </div>
          <div className="col-md-8 ">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Acc. No.</th>
                  <th>Account Name</th>
                  <th>Currency</th>
                  <th>Ammount</th>
                  <th>Transaction</th>
                </tr>
              </thead>
              <tbody>
                {store.getState().currentCountries.map((item, index) => (
                  <TransactionRow product={item} key={index} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
            <div className="col-md-4">
            </div>
            <div className="col-md-8 ">
            <Pagination />
            </div>
          </div>
      </div>
    );
  };
}

export default FilterableTransactionTable;
