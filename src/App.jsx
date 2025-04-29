import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Arcade from "./components/music/Arcade";
import Impossible from "./components/music/Impossible";
import BeautifulThings from "./components/music/BeautifulThings";
import Blue from "./components/music/Blue";
import DieWithASmile from "./components/music/DieWithASmile";
import GoldenHour from "./components/music/GoldenHour";
import LetHerGo from "./components/music/LetHerGo";
import LetMeDownSlowly from "./components/music/LetMeDownSlowly";
import Photograph from "./components/music/Photograph";
import SomeoneYouLoved from "./components/music/SomeoneYouLoved";
import Sunflower from "./components/music/Sunflower";
import CountingStars from "./components/music/CountingStars";
import Hallelujah from "./components/music/Hallelujah";

function App() {
  return (
    <Router basename="/New-My-music">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arcade" element={<Arcade />} />
        <Route path="/impossible" element={<Impossible />} />
        <Route path="/beautiful_things" element={<BeautifulThings />} />
        <Route path="/blue" element={<Blue />} />
        <Route path="/die_with_a_smile" element={<DieWithASmile />} />
        <Route path="/golden_hour" element={<GoldenHour />} />
        <Route path="/let_her_go" element={<LetHerGo />} />
        <Route path="/let_me_down_slowly" element={<LetMeDownSlowly />} />
        <Route path="/photograph" element={<Photograph />} />
        <Route path="/someone_you_loved" element={<SomeoneYouLoved />} />
        <Route path="/sunflower" element={<Sunflower />} />
        <Route path="/counting_stars" element={<CountingStars />} />
        <Route path="/hallelujah" element={<Hallelujah />} />
      </Routes>
    </Router>
  );
}

export default App;
