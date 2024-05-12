import logo from "./logo.svg";
import "./App.css";
import Home from "../src/Pages/Home";
import About from "../src/Pages/About";
import Blogs from "../src/Pages/Blogs";
import SignUp from "../src/Pages/SignUp";
import Headerr from "../src/components/Headerr";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/*<Router>*/}
        {/* Header */}
        <Headerr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/Blogs">
            <Blogs />
          </Route>
        </Switch>
      <Footer/>
      {/*</Router>*/}

    </>
  );
}

export default App;
