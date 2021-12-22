import { Route, Switch } from "react-router";
import Homepage from "../pages/homepage/homepage";
import Logs from "../pages/logs/logs";
import Profile from "../pages/profile/profile";
import Signup from "../pages/signup/signup";
import Success from "../pages/success/success";
import VSuccess from "../pages/verificationSuccess/verificationSuccess";
import {
  HOME_PAGE_ROUTE,
  SIGNUP_PAGE_ROUTE,
  PROFILE_PAGE_ROUTE,
  LOGS_PAGE_ROUTE,
  SIGNUP_SUCCESS_PAGE_ROUTE,
  VERIFICATION_SUCCESS_PAGE_ROUTE,
} from "./route-paths";

function Routes(props) {
  const sse = props.sse;
  return (
    <Switch>
      <Route path={VERIFICATION_SUCCESS_PAGE_ROUTE}>
        <VSuccess />
      </Route>

      <Route path={SIGNUP_PAGE_ROUTE}>
        <Signup />
      </Route>

      <Route path={SIGNUP_SUCCESS_PAGE_ROUTE}>
        <Success />
      </Route>

      <Route path={LOGS_PAGE_ROUTE}>
        <Logs />
      </Route>

      <Route path={PROFILE_PAGE_ROUTE}>
        <Profile />
      </Route>

      <Route path={HOME_PAGE_ROUTE}>
        <Homepage sse={sse} />
      </Route>
    </Switch>
  );
}

export default Routes;
