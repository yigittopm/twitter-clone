import Navigation from "./components/Navigation";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Discovery from "./components/Discovery";

import HomePage from "./pages/HomePage";
import DiscoveryPage from "./pages/DiscoveryPage";
import ListsPage from "./pages/ListsPage";
import LocationPage from "./pages/LocationPage";
import NotificationPage from "./pages/NotificationPage";
import OtherPage from "./pages/OtherPage";
import ProfilePage from "./pages/ProfilePage";

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
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/discovery" component={DiscoveryPage}/>
            <Route exact path="/notification" component={NotificationPage}/>
            <Route exact path="/location" component={LocationPage}/>
            <Route exact path="/lists" component={ListsPage}/>
            <Route exact path="/profile" component={ProfilePage}/>
            <Route exact path="/other" component={OtherPage}/>
          </Switch>
        </div>
        <div className="col-md-3">
          <SearchBar />
          <Discovery />
        </div>
      </BrowserRouter>
    </div>
  );
}
