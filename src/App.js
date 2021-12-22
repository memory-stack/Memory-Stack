import "./App.css";
import Routes from "./presentation/routes/routes";
import Navbar from "./presentation/components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes></Routes>
    </div>
  );
}

export default App;
