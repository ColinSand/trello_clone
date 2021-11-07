import { CONSTANTS } from "../actions";

let listID = 2;
let cardID = 6;
// the following initial state is what is initially displayed on the screen as an example
// when logging in
const initialState = [
  {
    title: "Starting List",
    // the following id sets up a custom string so that react-beautifl-dnd doesnt get confused
    // between cards in different lists
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: "Please add as many cards and lists as you would like.",
      },
      {
        id: `card-${1}`,
        text: "Lists and cards can be moved to different positions.",
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
    case CONSTANTS.ADD_CARD: {
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
    }
    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        type,
      } = action.payload;
      const newState = [...state];
      //dragging lists around
      if (type === "list") {
        const list = newState.splice(droppableIndexStart, 1);
        newState.splice(droppableIndexEnd, 0, ...list);
        return newState;
      }

      if (droppableIdStart === droppableIdEnd) {
        const list = state.find((list) => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      if (droppableIdStart !== droppableIdEnd) {
        //find list where the drag happened
        const listStart = state.find((list) => droppableIdStart === list.id);
        //pull out the card from this list
        const card = listStart.cards.splice(droppableIndexStart, 1);
        //find list where drag ended
        const listEnd = state.find((list) => droppableIdEnd === list.id);
        //put the card in the new list
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }

      return newState;
    default:
      return state;
  }
};
export default listsReducer;
