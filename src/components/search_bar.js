import React, { Component } from 'react'

class SearchBar extends Component {   // only class based components can have state, extends is like inherits in rails
  constructor(props) {                // this is like an initializer method in ruby
    super(props)

    this.state = { term: '' }         // only use this.state = x inside constructor function
  }
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    ) // always manipulate state with 'this.setState'
  }

  onInputChange(term) {
    this.setState({ term })
    this.props.onSearchTermChange(term)
  }
}

export default SearchBar
