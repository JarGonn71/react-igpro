import { Routers } from './router';
import { Header } from '../widgets/Header';
import { SideBar } from '../widgets/SideBar';


function App() {
  return (
    <main className="bg-main w-screen h-screen">
      <div className="flex">
        <SideBar/>
        <div className="grow">
          <Header/>
          <Routers/>
        </div>
      </div>
    </main>
  );
}

export default App;
