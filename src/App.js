import React,{Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Details/Login';
import List from './Details/List';
class App extends Component{

  render() {
  return (


      <Router>

      <Route exact path="/" component={Login} />
      <Route path="/list" component={List}  />


    </Router>


  );
  }
}


export default App;
