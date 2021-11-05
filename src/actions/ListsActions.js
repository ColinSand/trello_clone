import { CONSTANTS } from "../actions";
//used specifically for lists

export const addList = (title) => {
  return {
    type: CONSTANTS.ADD_LIST,
    payload: title,
  };
};
