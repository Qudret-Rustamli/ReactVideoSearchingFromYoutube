import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    term: '',
  };

  handleSumbmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSumbmit}>
          <div className="field">
            <label htmlFor="search">Search for a video</label>
          </div>
          <input
            onChange={(event) => this.setState({ term: event.target.value })}
            id="search"
            value={this.state.term}
            type="text"
            placeholder="Search..."
          />
        </form>
      </div>
    );
  }
}
