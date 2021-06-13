import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Alert from './components/layout/Alert';
import About from './pages/About';
import User from './components/users/User';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import './App.css';

const App = () => {

    return (
      <GithubState>
      <AlertState>
      <BrowserRouter>
        <div>
          <Navbar />
            <div className='container'>
              <Alert />

              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' exact component={About} />
                <Route path='/user/:login' exact component={User} />
                <Route path='*' component={NotFound} />
              </Switch>

            </div>
        </div>
      </BrowserRouter>
      </AlertState>
      </GithubState>
    )
}

export default App;
