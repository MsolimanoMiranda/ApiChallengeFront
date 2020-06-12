import { SAVE, UPDATE, REMOVE, FETCH } from "./actionTypes";


const initialState={};


export default function user(state =initialState, action:any) {
switch (action.type) {
  case SAVE: 
  return {
    ...action.payload
  };

  case FETCH: 
    return {
      questions: action.payload
    };
  
  case UPDATE: 
    return { 
      ...state,
      ...action.payload

    };

  case REMOVE: 
    return {
      ...action.payload
    };
    
  default:
    return state;
}
}

