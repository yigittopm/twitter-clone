import Navigation from "../components/Navigation";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Discovery from "../components/Discovery";

import HomePage from "./HomePage";
import DiscoveryPage from "./DiscoveryPage";
import ListsPage from "./ListsPage";
import LocationPage from "./LocationPage";
import NotificationPage from "./NotificationPage";
import OtherPage from "./OtherPage";
import ProfilePage from "./ProfilePage";
import NotFound from "./NotFound";

import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function UserPage() {
  return (
    <BrowserRouter>
      <div className="col-md-3">
        <Navigation />
      </div>
      <div className="col-md-6">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/discovery" component={DiscoveryPage} />
          <Route exact path="/notification" component={NotificationPage} />
          <Route exact path="/location" component={LocationPage} />
          <Route exact path="/lists" component={ListsPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/other" component={OtherPage} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </div>
      <div className="col-md-3">
        <SearchBar />
        <Discovery />
      </div>
    </BrowserRouter>
  );
}
