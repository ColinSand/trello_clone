import { CONSTANTS } from "../actions";

//used specifically for cards
//need to know the listID since the cards are added to a list.
export const addCard = (listID, text) => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: { text, listID },
  };
};
export const deleteCard = (listID) => {
  return {
    type: CONSTANTS.DELETE_CARD,
    payload: { listID },
  };
};
