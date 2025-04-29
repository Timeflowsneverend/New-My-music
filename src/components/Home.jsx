import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <h1>My Music</h1>
      <ul className="music">
        <li>
          <Link className="grid" to="/impossible">
            Impossible
          </Link>
        </li>
        <li>
          <Link className="grid" to="/arcade">
            Arcade
          </Link>
        </li>
        <li>
          <Link className="grid" to="/beautiful_things">
            Beautiful Things
          </Link>
        </li>
        <li>
          <Link className="grid" to="/blue">
            Blue
          </Link>
        </li>
        <li>
          <Link className="grid" to="/die_with_a_smile">
            Die With A Smile
          </Link>
        </li>
        <li>
          <Link className="grid" to="/golden_hour">
            Golden Hour
          </Link>
        </li>
        <li>
          <Link className="grid" to="/let_her_go">
            Let Her Go
          </Link>
        </li>
        <li>
          <Link className="grid" to="/let_me_down_slowly">
            Let Me Down Slowly
          </Link>
        </li>
        <li>
          <Link className="grid" to="/photograph">
            Photograph
          </Link>
        </li>
        <li>
          <Link className="grid" to="/someone_you_loved">
            Someone You Loved
          </Link>
        </li>
        <li>
          <Link className="grid" to="/sunflower">
            Sunflower
          </Link>
        </li>
        <li>
          <Link className="grid" to="/counting_stars">
            Counting Stars
          </Link>
        </li>
        <li>
          <Link className="grid" to="/hallelujah">
            Hallelujah
          </Link>
        </li>
      </ul>
      {/* <a
        className="mp-download"
        href="apk/Gramophone-1.0.16.1-release.apk"
        download
      >
        Download Gramophone (Music Player For Android)
      </a> */}
    </div>
  );
};

export default Home;
