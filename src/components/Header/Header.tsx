import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//components
import AddTask from '../AddTask/AddTask';
import Home from '../Home/Home';
import RemoveTask from '../RemoveTask/RemoveTask';

//Styles
import './Header.css';

//Routes
const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>Home / </div>,
    main: () => <Home></Home>
  },
  {
    path: "/add",
    sidebar: () => <div>Add Task / </div>,
    main: () => <AddTask></AddTask>
  },
  {
    path: "/remove",
    sidebar: () => <div>Remove Task / </div>,
    main: () => <RemoveTask></RemoveTask>
  },
  {
    path: "*",
    sidebar: () => <div> 404 Not Found </div>,
    main: () => <div> 404 Not Found </div>
  }
];

class Header extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div className="header">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Circle-icons-dev.svg" alt="logo"></img>
            <span>OrgAppNizer</span>
            
            <div className="links">
              <Link to="/">Home</Link>
              <Link to="/add">Add Task</Link>
              <Link to="/remove">Remove Task</Link>
            </div>
          </div>
          <div className="breadcrumbs">
            <span>
              <Switch>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.sidebar />}
                  />
                ))}
              </Switch>
            </span>
          </div>
          <div className="content">
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              ))}
            </Switch>
          </div>
        </Router>
      </div >
    );
  }
}

export default Header;

