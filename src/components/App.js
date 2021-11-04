import React, { Component } from "react";
import TrelloList from "./TrelloList";
import { connect } from "react-redux";

class App extends Component {
  render() {
    const { lists } = this.props;
    return (
      <div className="App">
        <h2>Does this render?</h2>
        {lists.map((list) => (
          <TrelloList title={list.title} cards={list.cards} />
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  lists: state.lists,
});
export default connect(mapStateToProps)(App);
