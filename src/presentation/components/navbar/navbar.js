import { useHistory } from "react-router";
import { HOME_PAGE_ROUTE, SIGNUP_PAGE_ROUTE } from "../../routes/route-paths";

function Navbar(props) {
  const sse = props.sse;
  const navigator = useHistory();
  function handleSignup() {
    sse.close();
    navigator.push(SIGNUP_PAGE_ROUTE);
  }

  return (
    <div className="navbar">
      <a
        onClick={() => {
          navigator.push(HOME_PAGE_ROUTE);
        }}
        className="logo"
      >
        MEMORY STACK
      </a>
      <div className="buttons">
        <a href="" className="navbarButton" onClick={handleSignup}>
          signup
        </a>
        <a
          href="https://github.com/memory-stack/memory-stack"
          className="navbarButton"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>
      </div>
    </div>
  );
}
export default Navbar;
