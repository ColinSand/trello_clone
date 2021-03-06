export * from "./ListsActions";
export * from "./CardsActions";

// breaks down exactly what the actions are so that the ADD_CARD and ADD_LIST
// can be used in the reducer

export const CONSTANTS = {
  ADD_CARD: "ADD_CARD",
  ADD_LIST: "ADD_LIST",
  DRAG_HAPPENED: "DRAG_HAPPENED",
  DELETE_CARD: "DELETE_CARD",
  DELETE_LIST: "DELETE_LIST",
};
