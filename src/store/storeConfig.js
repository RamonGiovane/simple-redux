import { createStore, combineReducers } from "redux";
import numbersReducer from "./reducers/numbers";

const reducers = combineReducers({  
  numbers: numbersReducer,

  names_example: function (state, action) {
    console.log(state, '', action)
    console.log('Reducer nomes...')
    return ['Ana', 'Bia', 'Carlos']
  }
})

function storeConfig() {
  return createStore(reducers)
}

export default storeConfig;