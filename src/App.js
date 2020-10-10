import React from 'react';
import './App.css';
import FooterComponent from './component/FooterComponent';
import HeaderComponent from './component/HeaderComponent';
import ListEmployeeComponent from './component/ListEmployeeComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './component/About';
import CreateEmployee from './component/CreateEmployee';

function App() {
  return (
    <div>
      <Router>

          <HeaderComponent />
          <div className="container">

            <Switch> 
              <Route path="/"  exact component={ListEmployeeComponent}></Route>
              <Route path="/employees"  component={ListEmployeeComponent} ></Route>
              <Route path="/add-employee"  component={CreateEmployee} ></Route>
              <Route path="/about"  component={About} ></Route>
             

          
            </Switch>
            
          </div>
          <FooterComponent />
        
      </Router>
    </div>




  );
}

export default App;
