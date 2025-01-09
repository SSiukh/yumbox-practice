import data from '../data/data.json';
import Header from './header/Header';
import Hero from './hero/Hero';
import BestSellers from './bestSellers/BestSellers';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Hero topItems={data.filter(item => item.top === true)} />
      <BestSellers />
    </div>
  );
};

export default App;

// ctrl + space for import
