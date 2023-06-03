import Category from './components/Category';
import Food from './components/Food';
import Headline from './components/Headline';
import Hero from './components/Hero';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className=''>
      <NavBar />
      <Hero />
      <Headline />
      <Food />
      <Category />
    </div>
  );
}

export default App;
