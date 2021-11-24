import {CHANGE_MAX_NUM, CHANGE_MIN_NUM} from './actionTypes'

const initialState =  { min: 1, max: 10 }
export default function (state = initialState, action) {

  switch (action.type) {
    case CHANGE_MIN_NUM:
      return {
        ...state,
        min: action.payload
      }; 
    case CHANGE_MAX_NUM:
      return {
        ...state,
        max: action.payload
      }
    default: return state;
  }
}