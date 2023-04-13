import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/header/navbar';
import Hola from './components/main/main';
import Servicios from './components/servicios/servicios';
import Identidad from './components/identidad/identidad';
import SitioWeb from './components/sitioWeb/sitioWeb';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hola />
      <Servicios />
      <Identidad />
      <SitioWeb />
    </div>
  );
}

export default App;
