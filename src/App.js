import Panel from "./components/panel";
import PantallaNotas from "./components/pantallaNotas";
import Layout from "./views/Layout";
function App() {
  return (
    <div className="App">
      <Layout>
      <main className="main">
      <Panel/>
      <PantallaNotas/>
      </main>
      </Layout>
    </div>
  );
}

export default App;
