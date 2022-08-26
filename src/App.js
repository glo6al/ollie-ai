import './App.css';
import DraftInput from './components/DraftInput';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
      <DraftInput></DraftInput>
      </main>
    </div>
  );
}

export default App;
