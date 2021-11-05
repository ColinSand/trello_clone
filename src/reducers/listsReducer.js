import { CONSTANTS } from "../actions";

let listID = 2;
let cardID = 4;
const initialState = [
  {
    title: "Last Episode",
    id: 0,
    cards: [
      {
        id: 0,
        text: "we created a static list and static card",
      },
      {
        id: 1,
        text: "we used a mix between material ui react and tyled components",
      },
    ],
  },
  {
    title: "This Episode",
    id: 1,
    cards: [
      {
        id: 0,
        text: "we will create our first reducer",
      },
      {
        id: 1,
        text: "and render many cards on our list with static data",
      },
      {
        id: 2,
        text: "we will also make some little changes i forgot in the last episode ",
      },
    ],
  },
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: listID,
      };
      listID += 1;
      return [...state, newList];
    case CONSTANTS.ADD_CARD:
      const newCard = {
        text: action.payload.text,
        id: cardID,
      };
      cardID += 1;
      const newState = state.map((list) => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        } else {
          return list;
        }
      });
      return newState;
    default:
      return state;
  }
};
export default listsReducer;
