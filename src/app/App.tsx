import { Main } from './ui/Main';
import { Auth } from './ui/Auth';
import { useAuth } from 'shared/providers/AuthProvider';

function App() {
  const { isAuth } = useAuth();
  return (
    <main className="bg-main w-screen h-screen">
      {isAuth ? <Main/> : <Auth/> }
    </main>
  );
}

export default App;
