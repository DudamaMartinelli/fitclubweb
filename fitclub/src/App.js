import './App.css';
import Footer from './componente/Footer/Footer';
import Hero from './componente/Hero/Hero';
import Join from './componente/Join/Join';
import Planos from './componente/Planos/Planos';
import Programas from './componente/Programas/Programas';
import Reasons from './componente/Reasons/Reasons';
function App() {
  return (
    <div className="App">      
          <Hero/>
          <Programas/>
          <Reasons/>
          <Planos/>
          <Join/>
          <Footer/>
    </div>
  );
}

export default App;
