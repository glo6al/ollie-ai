import "./App.css";
import DraftInput from "./components/DraftInput";
import Dashboard from "./components/Dashboard";
import AddClient from "./components/AddClient";
import Header from "./components/Header";
import Compose from "./components/Compose";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Dashboard />
        <DraftInput></DraftInput>
        <AddClient />
        <Compose />
      </main>
    </div>
  );
}

export default App;
