import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarR from './components/NavbarR';
import Login from './components/Login';
import Main from './components/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';


const localToken = JSON.parse(localStorage.getItem('token'))?.token || '';

function App() {
    const [token, setToken] = useState(localToken);
    
 
    return (
        <Router>
            <NavbarR token={token} setToken={setToken}/>
            <Switch>
                    <Route path="/" exact>
                        <Main token={token}/>
                    </Route>
                    <Route path="/login" exact>
                        <Login token={token} setToken={setToken}/>
                    </Route>       
            </Switch>
        </Router>
    );
};

export default App;

