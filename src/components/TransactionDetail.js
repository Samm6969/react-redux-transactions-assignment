import React, { Component } from "react";
import data from "../data.json";
import { Link } from "react-router-dom";


export default class TransactionDetail extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.transaction = data.transactions.find(
      tr => tr.account === this.props.match.params.id
    );
    console.log(this.transaction);
  }

  render() {
    return (
      <div>
                <div className="col-2"><h1><Link to="/">Home</Link> </h1></div>
                <div className="col-10"><h1> Transaction- {this.transaction.account} </h1></div>
                <hr />
                
                <div className="col-2 heading">Account No: </div>
                <div className="col-10 info">{this.transaction.account}</div>
                <div className="col-2 heading">Account Name: </div>
                <div className="col-10 info">{this.transaction.accountName}</div>
                <div className="col-2 heading">Currency Code: </div>
                <div className="col-10 info">{this.transaction.currencyCode}</div>
                <div className="col-2 heading">Amount:</div>
                <div className="col-10 info">{this.transaction.amount}</div>
                <div className="col-2 heading">Transaction Type:</div>
                <div className="col-10 info">{this.transaction.transactionType}</div>
            </div>
    );
  }
}
