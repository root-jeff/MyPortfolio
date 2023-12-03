import './App.css';
import { Header } from './components/header/Header.jsx';
import { Home } from './Home/Home.jsx';
function App() {
  return (
   <>
      <Header/>
      <main className='main'>
        <Home/>
      </main>
   </>
  );
}

export default App;
