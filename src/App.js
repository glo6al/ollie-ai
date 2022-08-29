import './App.css';
import DraftInput from './components/DraftInput';
import Dashboard from './components/Dashboard';
import AddClient from './components/AddClient';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Dashboard/>
        <DraftInput></DraftInput>
        <AddClient/>
      </main>
    </div>
  );
}

export default App;
