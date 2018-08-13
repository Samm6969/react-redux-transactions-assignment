import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch,Route } from "react-router-dom";
import "./index.css";
import FilterableTransactionTable from "./components/FilterableTransactionTable";
import registerServiceWorker from "./registerServiceWorker";
import TransactionDetail from './components/TransactionDetail';
import store from "./store";

let render = () =>ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true}>
      <FilterableTransactionTable /> 
      </Route>
     <Route path="/:id" component={TransactionDetail}/> 
    </Switch>
  </BrowserRouter>,
  document.getElementById("container")
);
render();
store.subscribe(() => {
  console.log("asdfasdf");
  render();
});

registerServiceWorker();
