import './App.css';
import Layout from './components/layout'
import FileExplorerContainer from './components/file-explorer-container'

const App = () => {
  return (
    <div className="App">
      <Layout>
        <FileExplorerContainer/>
      </Layout>
    </div>
  );
}

export default App;
