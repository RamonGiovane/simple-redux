import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
  numbers: function (state, action) {
    switch (action.type) {
      case 'CHANGE_MIN_NUM':
        return {
          ...state,
          min: action.payload
        }; 
      case 'CHANGE_MAX_NUM':
        return {
          ...state,
          max: action.payload
        }
      default: return { min: 1, max: 10 }
    }
  },

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