import { createStore } from "redux";
import reducer from "../reducer";

const initialState = {
  filter: {
    account: [],
    transaction: []
  },
  pagination: {
    currentPage: 1,
    totalPages: null,
    pageLimit: 10,
    totalRecords: null
  }
};
export default createStore(reducer, initialState); //this has been updated to include the created reducer.
