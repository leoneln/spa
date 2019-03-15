import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Onemore from "./Onemore";
import Modmain from "./Modmain";

//This guy is the frame of the application....
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/stuff">Stuff</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/onemore">OneMore</NavLink>
            </li>
            <li>
              <NavLink to="/modmain">Mod Main</NavLink>
            </li>
          </ul>
          <div className="content" />
          <Route exact path="/" component={Home} />
          <Route path="/stuff" component={Stuff} />
          <Route path="/contact" component={Contact} />
          <Route path="/onemore" component={Onemore} />
          <Route path="/modmain" component={Modmain} />
        </div>
      </HashRouter>
    );
  }
}

export default Main;
