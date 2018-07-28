import React, { Component } from 'react'

class SearchBar extends Component {   // only class based components can have state, extends is like inherits in rails
  constructor(props) {                // this is like an initializer method in ruby
    super(props)

    this.state = { term: 'Get set' }         // only use this.state = x inside constructor function
  }
  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    ) // always manipulate state with 'this.setState'
  }
}

export default SearchBar
