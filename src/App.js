import "./App.css";
import Routes from "./presentation/routes/routes";
import { useSelector } from "react-redux";
import Navbar from "./presentation/components/navbar/navbar";
import socketIOClient from "socket.io-client";

function App() {
  const isLoading = useSelector((state) => state.loaderReducer.isLoading);
  // const socket = socketIOClient("https://api-memory-stack.herokuapp.com");
  // socket.connect();

  return (
    <article>
      <h1>We&rsquo;ll be back soon!</h1>
      <div>
        <p>
          Sorry for the inconvenience but we&rsquo;re performing some
          maintenance at the moment. If you need to you can always{" "}
          <a href="mailto:memory.stack.official@gmail.com">contact us</a>,
          otherwise we&rsquo;ll be back online shortly!
        </p>
        <p>&mdash; The Memory stack Team</p>
      </div>
    </article>
  );
}

export default App;
