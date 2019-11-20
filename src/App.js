import React from 'react'
import './App.css'
import './components/warningSign.jsx'
import WarningSign from './components/warningSign.jsx'
import scifi from './scifi'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      scifi:scifi,
      badgeColor:'dark'
    }
  }
  componentDidMount(){
    
  }
  render(){
    return (
      <div className="App">
        {
          this.state.scifi.map(({index, ...otherBookData}) => (
            <WarningSign key={index} badgeColor={this.state.badgeColor} {...otherBookData}/>
          ))
        }
      </div>
    );
  }
}

export default App;
