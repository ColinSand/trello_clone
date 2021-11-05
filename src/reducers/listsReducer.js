import { CONSTANTS } from "../actions";

let listID = 2;
let cardID = 6;
// the following initial state is what is initially displayed on the screen as an example
// when logging in
const initialState = [
  {
    title: "Last Episode",
    // the following id sets up a custom string so that react-beautifl-dnd doesnt get confused
    // between cards in different lists
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: "we created a static list and static card",
      },
      {
        id: `card-${1}`,
        text: "we used a mix between material ui react and tyled components",
      },
    ],
  },
  {
    title: "This Episode",
    id: `list-${1}`,
    cards: [
      {
        id: `card-${2}`,
        text: "we will create our first reducer",
      },
      {
        id: `card-${3}`,
        text: "and render many cards on our list with static data",
      },
      {
        id: `card-${4}`,
        text: "we will also make some little changes i forgot in the last episode ",
      },
    ],
  },
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    // for the ADD_LIST case the title will be what you type in(action.payload)
    // the cards are an empty array as there are no card right away.
    // then the id of the list must be assigned as well so that we know what cards go in the new list

    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${listID}`,
      };
      listID += 1;
      return [...state, newList];
    // these newLists and newCards also use incremented ids to tell them all apart when creating
    case CONSTANTS.ADD_CARD:
      const newCard = {
        text: action.payload.text,
        id: `card-${cardID}`,
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
