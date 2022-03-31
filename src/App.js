import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ReactSession} from 'react-client-session';

import Login from './components/login';
import AddUser from './components/signup';
import Dashboard from './components/dashboard';
import Home from './components/home';
import CustomerList from './components/customerList';
import Profile from './components/profile';

import './components/app.css';

function App() {
  
  ReactSession.setStoreType("sessionStorage");
  
  return (
    
    <Router>
      
      <Switch>
        
        <Route exact path="/">
          <Login/>
        </Route>
        
        <Route exact path="/signup">
          <AddUser/>
        </Route>
        
        <Route exact path="/home">
          <div className="navList">
            <Dashboard/>
            <Home/>
          </div>
        </Route>
        
        <Route exact path="/customers">
          <div className="navList">
            <Dashboard/>
            <CustomerList/>
          </div>
        </Route>
        
        <Route exact path="/customers/:id">
          <div className="navList">
            <Dashboard/>
            <Profile/>
          </div>
        </Route>
        
      </Switch>
      
    </Router>
    
  );
}

export default App;