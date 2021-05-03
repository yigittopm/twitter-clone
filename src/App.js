import Navigation from "./components/Navigation";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Discover from "./components/Discovery";

import HomePage from "./pages/HomePage";

import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div className="container-fuild row mt-3 pl-3">
      <BrowserRouter>
        <div className="col-md-3">
          <Navigation />
        </div>
        <div className="col-md-6">
          <Header />
          <Switch>
            <HomePage />
          </Switch>
        </div>
        <div className="col-md-3">
          <SearchBar />
          <Discover />
        </div>
      </BrowserRouter>
    </div>
  );
}
