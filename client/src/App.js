import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNav from "./components/MainNav"
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes , Switch} from "react-router-dom";
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Search from './Pages/Search/Search';
import Series from './Pages/Series/Series';
function App() {
  return (
    <BrowserRouter>
      <Header/>
      
      <div className="App">
      
      <Routes>
            <Route path="/" element={<Trending/>} />
            <Route path="/movies" element={<Movies/>} />
            <Route path="/series" element={<Series/>} />
            <Route path="/search" element={<Search/>} />
      </Routes>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
