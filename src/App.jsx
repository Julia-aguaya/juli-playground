import "./App.css";
import FrogCollection from "./components/FrogCollection";
import Hero from "./components/Hero";
import SelectedWork from "./components/SelectedWork";

function App() {
  return (
    <main>
      <Hero />
      <SelectedWork />
      <FrogCollection />
    </main>
  );
}

export default App;