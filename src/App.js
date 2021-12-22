import "./App.css";
import Routes from "./presentation/routes/routes";
import Navbar from "./presentation/components/navbar/navbar";
const sse = { close: 0 };

function App() {
  return (
    <div className="App">
      <Navbar sse={sse}></Navbar>
      <Routes sse={sse}></Routes>
    </div>
  );
}

export default App;
