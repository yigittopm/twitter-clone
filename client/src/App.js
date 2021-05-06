import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PrivateRoute from "./pages/PrivateRoute";
import NotFound from "./pages/NotFound";

import {BrowserRouter, Route, Switch} from "react-router-dom";

export default function App() {
  
  return (
    <BrowserRouter>
      <div className="container-fuild row mt-3 pl-3">
        <Switch>
          
          <Route exact path="/register"         component={RegisterPage}/>
          <PrivateRoute exact path="/private"   component={UserPage} />
          <Route exact path="/login"            component={LoginPage}/>
          <Route path="/*"                      component={NotFound} />
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}
