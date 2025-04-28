import './Home.css';
const Home = () => {
  return (       
  <div className="container">
    <h1>My Music</h1>
    <ul className="music">
      <li><a className="grid" href="html/impossible.html">Impossible</a></li>
      <li><a className="grid" href="html/arcade.html">Arcade</a></li>
      <li><a className="grid" href="html/beautiful_things.html">Beautiful Things</a></li>
      <li><a className="grid" href="html/blue.html">Blue</a></li>
      <li><a className="grid" href="html/die_with_a_smile.html">Die With A Smile</a></li>
      <li><a className="grid" href="html/golden_hour.html">Golden Hour</a></li>
      <li><a className="grid" href="html/let_her_go.html">Let Her Go</a></li>
      <li><a className="grid" href="html/let_me_down_slowly.html">Let Me Down Slowly</a></li>
      <li><a className="grid" href="html/photograph.html">Photograph</a></li>
      <li><a className="grid" href="html/someone_you_loved.html">Someone You Loved</a></li>
      <li><a className="grid" href="html/sunflower.html">Sunflower</a></li>
      <li><a className="grid" href="html/counting_stars.html">Counting Stars</a></li>
      <li><a className="grid" href="html/hallelujah.html">Hallelujah</a></li>
    </ul>
    <a className="mp-download" href="apk/Gramophone-1.0.16.1-release.apk" download>Download Gramophone (Music Player For Andorid)</a>
  </div>
  );
}
export default Home;