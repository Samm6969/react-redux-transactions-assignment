import React from 'react';
import ReactDOM from 'react-dom';
import FilterableTransactionTable from './FilterableTransactionTable';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FilterableTransactionTable />, div);
  ReactDOM.unmountComponentAtNode(div);
});
