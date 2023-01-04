
import './App.css';
import LogoFreeCodeCamp  from './componentes/LogoFreeCodeCamp';
import Tarea from './componentes/Tarea'


function App() {
  return (
    <div className="App">
        <LogoFreeCodeCamp />
          <div className='tareas-lista-principal'>
          <h1>Mis tareas</h1>
          <Tarea texto={'Aprender React'} />
          </div>
      </div>
  
  );
}

export default App;
