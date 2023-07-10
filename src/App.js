import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Landing from './Components/Landing/Landing';
import Navbar from './Components/Navbar/Navbar';
import Detail from './Components/Detail/Detail';
import Form from './Components/Form/Form';


function App() {
  return (
    <BrowserRouter>
    <div>
        <Route path='/' component={Navbar}/>
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/home' component={Home}/>
        <Route path='/countries/:id' component={Detail}/>
        <Route path='/create' component={Form}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
