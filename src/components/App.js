import React, { Component } from "react";
import TrelloList from "./TrelloList";
import { connect } from "react-redux";
import TrelloActionButton from "./TrelloActionButton";
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "../actions";

class App extends Component {
  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    );
  };
  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="grandTetonBackground">
          <h2>Trello Clone</h2>

          <div style={styles.listsContainer}>
            {/* maps out each key on the TrelloList component */}
            {lists.map((list) => (
              <TrelloList
                listID={list.id}
                key={list.id}
                title={list.title}
                cards={list.cards}
              />
            ))}
            <TrelloActionButton list></TrelloActionButton>
          </div>
        </div>
      </DragDropContext>
    );
  }
}
const styles = {
  // background: {
  //   backgroundImage: `url(${grandTeton})`,
  //   backgroundSize: cover,
  //   backgroundAttachment: fixed,
  //   backgroundBlendMode: screen,
  //   backgroundColor: green,
  //   fontFamily: Arial,
  //   Helvetica,
  //   sansSerif,
  //   paddingBottom: 100,
  // },
  listsContainer: {
    display: "flex",
    flexDirection: "row ",
  },
};
const mapStateToProps = (state) => ({
  lists: state.lists,
});
export default connect(mapStateToProps)(App);
