import { Component } from 'react';
import './App.css';
import Data from './data.json';
import About from './pages/About.js';
import Navbar from './pages/Navbar.js';
import Card from './pages/card.js';
import './style.css';

class App extends Component{
state={
  myData:Data,
}


  render(){
    return (
    
      <div className="App">
        <div class="jumbotron text-center">
        <div id="banner">
    <div id="bannerOverlay">
    <div class="bannerText" id="bannerBody">{
                        Data.map( unitData => {
                        return (
                            <div>{unitData.instructor.name}
                            </div>
                        );
                    })
            }</div>
      <div class="bannerText" id="bannerTitle">{
                        Data.map( unitData => {
                        return (
                            <div>{unitData.course.title}
                            </div>
                        );
                    })
            }</div>
    </div>
    <Navbar/>
    <Card/>
      <About propsData={this.state.myData}/>
  </div>
    </div>
    
    
      </div>
      
    );
  }
  
}

export default App;
