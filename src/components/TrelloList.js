import React from "react";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";
import listsReducer from "../reducers/listsReducer";
import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  height: 100%;
  margin-right: 8px;
`;

const Lists = styled.div`
  height: 100%;
`;
const ListDeleteButton = styled.button`
  float: right;
  margin-right: 5px;
`;

const TrelloList = ({ title, cards, listID, index }) => {
  return (
    <Draggable draggableId={String(listID)} index={index}>
      {(provided) => (
        <ListContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId={String(listID)} type="card">
            {/* to get Droppable to work the following was wrapped in the "provided" function */}
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <h4>
                  {title} <ListDeleteButton>X</ListDeleteButton>
                </h4>
                {cards.map((card, index) => (
                  // the card.id here is for later reference
                  <TrelloCard
                    id={card.id}
                    index={index}
                    key={card.id}
                    text={card.text}
                  />
                ))}
                {provided.placeholder}
                <TrelloActionButton listID={listID} />
              </div>
            )}
          </Droppable>
        </ListContainer>
      )}
    </Draggable>
  );
};

export default TrelloList;
