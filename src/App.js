import './App.css';
import Routes from './presentation/routes/routes';
import { useSelector } from 'react-redux';
import Navbar from './presentation/components/navbar/navbar';
import socketIOClient from 'socket.io-client';

function App() {
  const isLoading = useSelector((state) => state.loaderReducer.isLoading);
  const socket = socketIOClient('https://api-memory-stack.herokuapp.com');

  return (
    <div className="App">
      <Navbar socket={socket}></Navbar>
      <Routes socket={socket}></Routes>
    </div>
  );
}

export default App;
