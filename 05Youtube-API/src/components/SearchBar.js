import React from "react";

import "./search.scss";

export class SearchBar extends React.Component {
  state = { term: "" };

  onSubmitForm = (ev) => {
    ev.preventDefault();

    this.props.onSubmitFormProp(this.state.term);
  };

  render() {
    return (
      <div className="search">
        <header className="search-nav">
          <h3>Video Streaming</h3>
          <div className="search-form">
            <form onSubmit={this.onSubmitForm} className="input-form">
              <input
                className="input-box"
                onChange={(event) =>
                  this.setState({ term: event.target.value })
                }
                placeholder="Type Something To Search"
              ></input>
              <button className="submit-btn" type="submit">
                Search
              </button>
            </form>
          </div>
        </header>
      </div>
    );
  }
}
