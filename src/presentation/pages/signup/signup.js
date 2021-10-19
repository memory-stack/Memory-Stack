import { useHistory } from "react-router";
import { postRequest } from "../../../data/data-source/remote/apiCall";
import { SIGNUP } from "../../../data/data-source/remote/apiList";
import { SIGNUP_SUCCESS_PAGE_ROUTE } from "../../routes/route-paths";
const bcrypt = require("bcryptjs");

function Signup() {
  const navigator = useHistory();
  async function handleSignup() {
    var username = document.getElementById("usernameField").value;
    var password = document.getElementById("passwordField").value;
    var email = document.getElementById("emailField").value;
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, async (err, hashedPassword) => {
        console.log(hashedPassword);
        await postRequest(SIGNUP, {
          username: username,
          password: hashedPassword,
          email: email,
        });

        navigator.push(SIGNUP_SUCCESS_PAGE_ROUTE);
      });
    });
  }

  return (
    <div className="body">
      <p className="headline">Signup.</p>
      <p className="bodyText">
        signup to use the created account <span>with the CLI.</span>
      </p>
      <form action="/" className="form">
        <input type="text" placeholder="username" id="usernameField" />
        <input type="email" placeholder="email" id="emailField" />
        <input type="password" placeholder="password" id="passwordField" />
      </form>
      <div className="button" onClick={handleSignup}>
        Create account
      </div>
    </div>
  );
}

export default Signup;
