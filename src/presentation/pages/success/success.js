import { postRequest } from "../../../data/data-source/remote/apiCall";
import { SIGNUP } from "../../../data/data-source/remote/apiList";

function Success() {
  return (
    <div className="body">
      <p className="headline">Success.</p>
      <p className="bodyText">
        A verification link has been sent to your email address. Please{" "}
        <span>verify to continue.</span>
      </p>
    </div>
  );
}

export default Success;
