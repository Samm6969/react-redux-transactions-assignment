import {
    GET_ALL_TRANSACTION,
    FILTER_TRANSACTION,
    SELECT_TRANSACTION
} from "./types";
import data from '../data.json'
import store from '../store'


export const fetchTransaction = () => {
    console.log('inside Filter');
    store.dispatch({
        type: GET_ALL_TRANSACTION,
        payload: data.transactions
    })
    console.log(store.getState())
};


export const filterTransaction = param => {
     store.dispatch({
        type:FILTER_TRANSACTION,
        payload: param
    });
};

export const selectTransaction=param =>{
    store.dispatch({
        type:SELECT_TRANSACTION,
        payload: param
    });
}

export const gotoPage = param =>{
    store.dispatch({
        type:'GOTO_PAGE',
        payload:param
    })
}

