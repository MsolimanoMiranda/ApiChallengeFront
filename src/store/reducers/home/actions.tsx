import { SAVE, UPDATE, REMOVE, FETCH } from "./actionTypes";

const fetch = (payload:any) => {
  return {
    type: FETCH,
    payload
  };
};

const save = (payload:any) => {
  return {
    type: SAVE,
    payload
  };
};

const update = (payload:any) => {
  return {
    type: UPDATE,
    payload
  };
};

const remove = () => {
  return {
    type: REMOVE,
    payload: {}
  };
};

const homeReducer = {
  fetch,
  save,
  update,
  remove
}

export default homeReducer;


