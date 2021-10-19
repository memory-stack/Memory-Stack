import "./App.css";
import Routes from "./presentation/routes/routes";
import { useSelector } from "react-redux";
import Navbar from "./presentation/components/navbar/navbar";

function App() {
  const isLoading = useSelector((state) => state.loaderReducer.isLoading);
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes></Routes>
    </div>
  );
}

export default App;
