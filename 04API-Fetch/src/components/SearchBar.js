import React from "react";

export class SearchBar extends React.Component {
  state = { term: "" };

  //Arrow Function will bind this with class instance
  onSubmitForm = (event) => {
    event.preventDefault();

    this.props.onSubmitProp(this.state.term);
  };

  render() {
    return (
      <div>
        <header className='header'>
          <h1>Image Search</h1>
        </header>
        <div className='input'>
          <form onSubmit={this.onSubmitForm}>
            <input
              onChange={(event) => this.setState({ term: event.target.value })}
              className='input-box'
              placeholder='input'
            ></input>
          </form>
        </div>
      </div>
    );
  }
}
