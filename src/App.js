import logo from './logo.svg';
import './App.css';

/* import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'; */
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  Navigate,
} from "react-router-dom";

import Home from './pages/home/Home';
import Landing from './pages/landing/Landing';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/home' element={ <Home />} ></Route>
        <Route exact path='/landing' element={<Landing />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
