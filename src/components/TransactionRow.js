import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class TransactionRow extends React.Component {
    render() {
      const product = this.props.product;
      // console.log(product);
      

      return (
        <tr>
          <td><Link to={product.account}>{product.account}</Link>{' '}</td>
          <td>{product.accountName}</td>
          <td>{product.currencyCode}</td>
          <td>{product.amount}</td>
          <td>{product.transactionType}</td>
        </tr>
      );
    }
  }

  export default TransactionRow;