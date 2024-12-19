import { useState } from 'react';
import Header from './Containers/Header'; // Corrected import statement
import './App.css';
import Home from './Components/Home.jsx';



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <Home/>
    </>
  );
}

export default App;
