import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarR from './components/NavbarR';
import Login from './components/Login';
import Main from './components/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import swal from "sweetalert";

const localToken = JSON.parse(localStorage.getItem('token'))?.token || '';

function App() {
    const [token, setToken] = useState(localToken);
    
    const logOut = () => {
        swal({
            title: "Gracias por visitarnos",
            text: "Te esperamos pronto para formar tu equipo",
        });
        localStorage.removeItem('token');
        setToken('');
    };

    return (
        <Router>
            <NavbarR token={token} logOut={logOut}/>
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

