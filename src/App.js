import './styles/navbar.css';
import './styles/index.css';
import './styles/home.css';
import './styles/resume.css';
import './styles/experiencia-laboral.css';

import {BrowserRouter, Route, Switch}  from 'react-router-dom';
import Home from './components/Home';
import Resume from './components/Resume';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <NavBar></NavBar>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            
            <Route exact path="/resume">
              <Resume></Resume>
            </Route>

          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
