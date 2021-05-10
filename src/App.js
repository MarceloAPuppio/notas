import Panel from "./components/panel";
import PantallaNotas from "./components/pantallaNotas";
import Layout from "./views/Layout";
import {useState} from 'react';
import uuid from 'react-uuid'
import Context from "./Context";

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
console.log(notas);
  return (
    <div className="App">
      <Layout>
      <Context.Provider value={{notas, setNotas}}>        
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
