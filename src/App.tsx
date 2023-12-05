import './App.css';
import { Navbar } from './components';
import { Home } from './pages';
import { LayoutContainer } from './styled-component';

function App() {

  return (
    <>
      <Navbar/>
      <LayoutContainer>
        <Home/>

      </LayoutContainer>
    </>
  )
}

export default App
