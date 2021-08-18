import React, { Component } from "react";
class ChangerButton extends Component {
  state = {
    value: this.props.shelf,
  };
  handleChange = (e) => {
    const { book, onMoveBook } = this.props;
    const val = e.target.value;
    this.setState({ value: val });
    onMoveBook(book, val);
  };
  render() {
    const { value } = this.state;
    return (
      <div className="book-shelf-changer">
        <select value={value} onChange={this.handleChange}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}
export default ChangerButton;
