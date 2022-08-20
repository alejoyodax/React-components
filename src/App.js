
import './App.css';
import Slider from './components/Slider/Slider';
import { mostFavoriteArticles } from './components/Slider/mostFavoriteArticles.js'



function App() {
  return (
    <div className="App">
      <Slider mostFavoriteArticles={ mostFavoriteArticles } />
    </div>
  );
}

export default App;
