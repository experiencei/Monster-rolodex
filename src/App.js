import React, { Component } from 'react'
import "./App.css";
import Cardlist from "./components/Cardlist/cardlist";
import Search from './components/search/search';
class App extends Component {
  constructor() {
    super();
    this.state = {
      valu : [],
      search : ''
    }
  }
  
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(Response => Response.json())
    .then(valu => this.setState({valu}))
  }

  handleSearch = (e) => {
    this.setState({search:e.target.value})
  }

  render() {
      const {valu ,search} = this.state;
      const searchField =
        valu.filter( val => 
          val.name.toLowerCase().includes(search.toLowerCase())
        )
    
    return (
      <div className="App">
      <h1>Monster Rolodex</h1>
      <Search
        placeholder={"search 4 monster"}
        onChange={this.handleSearch}
      />
      
      <Cardlist
        monster={searchField}
      />

      </div>
    )
  }
}

export default App;



