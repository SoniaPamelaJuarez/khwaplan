import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/header/navbar';
import Hola from './components/main/main';
import Servicios from './components/servicios/servicios';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hola />
      <Servicios />
    </div>
  );
}

export default App;
