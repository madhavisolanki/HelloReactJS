import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SidebarComponent from './SidebarComponent';
import  MainComponent  from './MainComponent';

class App extends Component {
  render() {
    let urlList = [
      {
        urlName: "Madhavi",
        apiUrl: "https://www.github.com/",
        color: "red",
      },{
        urlName: "Anit",
        apiUrl: "https://anit.github.com/",
        color: "green",
      },{
        urlName: "Apurva",
        apiUrl: "https://www.github.com/",
        color: "blue",
      },
    ];
    return (
      <div className="App">
        <div className='sidebar'>
          <h1> sidebar </h1>
          <SidebarComponent urlList={urlList} />
        </div>
        <div className='main'>
          <h1> main </h1>
          <MainComponent />
        </div>
    </div>
    );
  }
}
export default App;
