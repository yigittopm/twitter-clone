import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PrivateRoute from "./pages/PrivateRoute";

import {BrowserRouter, Route, Switch} from "react-router-dom";

export default function App() {
  
  return (
    <BrowserRouter>
      <div className="container-fuild row mt-3 pl-3 a">
        <Switch>
          <Route exact path="/register"     component={RegisterPage}/>
          <Route exact path="/login"        component={LoginPage}/> 
          <PrivateRoute path="/"            component={UserPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
