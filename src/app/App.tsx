import { Main } from './ui/Main';
import { Auth } from './ui/Auth';
import { useState } from 'react';


function App() {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  return (
    <main className="bg-main w-screen h-screen">
      {isAuth ? <Main/> : <Auth/> }
    </main>
  );
}

export default App;
