import Panel from "./components/panel";
import PantallaNotas from "./components/pantallaNotas";
import Layout from "./views/Layout";
import {useState, useEffect} from 'react';
import uuid from 'react-uuid'
import Context from "./Context";
import {sortedByDate, sortedByPin} from './list-events'

function App() {
  let arregloNotas=[
    {id:uuid(),
     title: 'mi primer nota',
    description: 'lorem lorem ipsum jdskfksjdksjdkjskd',
    pinned:false,
    fecha:new Date()},
    {id:uuid(),
      title: 'mi segunda nota',
     description: 'lorem lorem ipsum jdskfksjdksjdkjskd',
     pinned:false,
    fecha: new Date()},
     {id:uuid(),
      title: 'mi tercera nota',
     description: 'lorem lorem ipsum jdskfksjdksjdkjskd',
     pinned:false,
    fecha: new Date()}
  ]
  const [notas, setNotas]=useState(arregloNotas);
  const [currentNota, setCurrentNota]= useState("")
  useEffect(()=>{
    if(currentNota){

      let arrayFiltrado= notas.filter((nota)=>nota.id!==currentNota.id)
      setNotas(sortedByPin([...arrayFiltrado, currentNota]))
    }
    // console.log('sorted', sortedByPin(notas));
  },[currentNota])
  
console.log(notas);
  return (
    <div className="App">
      <Layout>
      <Context.Provider value={{notas, setNotas, currentNota, setCurrentNota}}>        
      <main className="main">
      <Panel/>
      <PantallaNotas/>
      </main>
      </Context.Provider>
      </Layout>
    </div>
  );
}

export default App;
