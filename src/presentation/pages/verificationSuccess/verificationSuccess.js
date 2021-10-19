import { postRequest } from "../../../data/data-source/remote/apiCall";
import { SIGNUP } from "../../../data/data-source/remote/apiList";

function VSuccess() {
  return (
    <div className="body">
      <p className="headline">
        Account <span>verified!</span>
      </p>
      <p className="bodyText">
        Account verification complete! You can login to your account on the{" "}
        <span>Memory Stack CLI.</span> Need help? Head over to our github
        documentation.
      </p>
    </div>
  );
}

export default VSuccess;
