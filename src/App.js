import "./App.css";
import { Header } from "./components/header/Header.tsx";
import { Home } from "./Home/Home.tsx";
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
      </main>
    </>
  );
}

export default App;
