import React, { Component } from "react";
import TrelloList from "./TrelloList";
import { connect } from "react-redux";
import TrelloActionButton from "./TrelloActionButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort } from "../actions";
import styled from "styled-components";
import grandTeton from "../images/grandTeton.jpeg";

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const MainBackground = styled.div`
  background-image: url(${grandTeton});
  background-size: cover;
  background-attachment: fixed;
  background-blend-mode: screen;
  font-family: Arial, Helvetica, sans-serif;
  padding-bottom: 100px;
  min-height: 800px;
  margin: -20px -10px -10px -8px;
`;

const PageTitle = styled.h2`
  color: white;
  text-align: center;
  padding-top: 10px;
`;

class App extends Component {
  onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return;
    }
    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  };
  render() {
    const { lists } = this.props;
    return (
      <DragDropContext
        onDragEnd={this.onDragEnd}
        className="grandTetonBackground"
      >
        <MainBackground>
          <PageTitle> Trello Clone</PageTitle>
          {/* the droppableId can essentially be anything here */}
          <Droppable droppableId="all-lists" direction="horizontal" type="list">
            {(provided) => (
              <ListContainer
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {/* maps out each key on the TrelloList component */}
                {lists.map((list, index) => (
                  <TrelloList
                    listID={list.id}
                    key={list.id}
                    title={list.title}
                    cards={list.cards}
                    index={index}
                  />
                ))}
                {provided.placeholder}
                <TrelloActionButton list />
              </ListContainer>
            )}
          </Droppable>
        </MainBackground>
      </DragDropContext>
    );
  }
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});
export default connect(mapStateToProps)(App);
