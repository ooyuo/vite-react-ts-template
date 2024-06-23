import { useState } from 'react';
import './App.css';
import Translations from './components/Translations';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* <UserProfile userId={1} /> */}
        <Translations />
      </div>
    </>
  );
}

export default App;
