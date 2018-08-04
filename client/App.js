/**
 * Created by jacob on 03/08/18.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Page from './src/components/page/index';
import history from 'history';
import createBrowserHistory from 'history/createBrowserHistory';
import LoginPage from './src/components/login/index';

class App extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
        const history = createBrowserHistory();
        const tempHome = () => (<div><h1>WELCOME TO FITBITE!!!!!</h1></div>);
        const login = () => (<LoginPage history={history}/>);
        return (
            <Router history={history}>
                <Page>
                    <div id="header">
                        <Link to="/login">Login!</Link>
                    </div>
                   <Route path="/login" component={login}></Route>
                   <Route exact path="/" component={tempHome}></Route>
                </Page>
            </Router>
        )
    }
}

export default App;

