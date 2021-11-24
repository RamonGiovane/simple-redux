import { CHANGE_MIN_NUM, CHANGE_MAX_NUM } from "../reducers/actionTypes"
//Action Creator
export function changeMinNumber(newValue){
  return {
    type: CHANGE_MIN_NUM,
    payload: newValue
  }
}

//Action Creator
export function changeMaxNumber(newValue){
  return {
    type: CHANGE_MAX_NUM,
    payload: newValue
  }
}