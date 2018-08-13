import {
  GET_ALL_TRANSACTION,
  FILTER_TRANSACTION,
  SELECT_TRANSACTION
} from "../actions/types";
const initialState = {
  filterdItem: [],
  items: [],
  item: {},
  accountName: [],
  transactionType: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_NAME_FILTER":
      console.log(state, action);
      toggleArrayItem(state.filter.account, action.value);
      const type = state.filter.type;
      return {
        ...state
      };
      break;
    case "deposit-money":
      //do something
      break;
    case GET_ALL_TRANSACTION:
      console.log(state, action);

      return {
        ...state,
        filteredCountries: action.payload,
        allCountries: action.payload,
        accountName: uniqueAccountNames(action.payload),
        transactionType: uniqueTransactionType(action.payload),
        currentCountries: action.payload.slice(0, state.pagination.pageLimit),
        pagination: {
          ...state.pagination,

		  totalRecords: action.payload.length,
		  totalPages:Math.ceil(state.pagination.totalRecords / state.pagination.pageLimit)
        }
      };
    case FILTER_TRANSACTION:
      console.log(state, action);

      toggleArrayItem(state.filter.account, action.payload);
      console.log(state, action);
      console.log(filterCountries(state).length);

      return {
        ...state,
        filteredCountries: filterCountries(state),
        currentCountries: filterCountries(state).slice(0, state.pagination.pageLimit),
        pagination: {
          ...state.pagination,
		  totalRecords: filterCountries(state).length,
      totalPages: Math.ceil(filterCountries(state).length / state.pagination.pageLimit),
      currentPage:1
        }
      };
	case "GOTO_PAGE":
	const offset = (state.pagination.currentPage - 1) * state.pagination.pageLimit;
    const currentCountries = state.filteredCountries.slice(
      offset,
      offset + state.pagination.pageLimit
    )
      return {
		...state,
		currentCountries,
        pagination: {
          ...state.pagination,
          currentPage: Math.max( 0,Math.min(action.payload, state.pagination.totalPages))
        }
      };

    default:
      return state;
  }
};

function uniqueAccountNames(paylods) {
  let isAccountName = [],
    accountName = {};
  paylods.forEach(res => {
    if (!accountName[res.accountName]) {
      accountName[res.accountName] = true;
      isAccountName.push({ name: res.accountName, isChecked: false });
    }
  });
  return isAccountName;
}

function filterCountries(payloads) {
  console.log(payloads);
  
  let transaction = payloads.transactionType.filter(trans => trans.isChecked);
    // debugger;
    let accounts = payloads.accountName.filter(account => account.isChecked);
    let items= payloads.allCountries;
    // debugger;
    if(transaction.length){
        items = items.filter(item => transaction.find(trans => trans.name === item.transactionType)?item: void 0);
    }
    if(accounts.length){
        items = items.filter(item => accounts.find(account => account.name === item.accountName)?item: void 0);
    }
    console.log(items);
    
    return items;


  // return allCountries.filter(
  //   t =>
  //     filter.account.length === 0 || filter.account.indexOf(t.accountName) != -1
  // );
}

function uniqueTransactionType(paylods) {
  let isTransactionType = [];
  let transactionType = {};
  paylods.forEach(res => {
    if (!transactionType[res.transactionType]) {
      transactionType[res.transactionType] = true;
      isTransactionType.push({ name: res.transactionType, isChecked: false });
    }
  });
  return isTransactionType;
}

function filterByTransaction(paylods) {
  let transaction = paylods.transactionType.filter(trans => trans.isChecked);
  let accounts = paylods.accountName.filter(account => account.isChecked);
  let items = paylods.items;
  // debugger;
  if (transaction.length) {
    items = items.filter(
      item =>
        transaction.find(trans => trans.name === item.transactionType)
          ? item
          : void 0
    );
  }
  if (accounts.length) {
    items = items.filter(
      item =>
        accounts.find(account => account.name === item.accountName)
          ? item
          : void 0
    );
  }
  return items;
}

function toggleArrayItem(a, v) {
  console.log(a);

  var i = a.indexOf(v);
  if (i === -1) a.push(v);
  else a.splice(i, 1);

  // return { ...a};
}
