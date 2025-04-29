import React from 'react'
import './lyrics.css'
import { Link } from 'react-router-dom'

const Arcade = () => {
  return (
    <div>      
    <header>
        <nav>
            <div>
            <div><Link className="btn" to="/">Home</Link></div>
            </div>
        </nav>
    </header>
    {/* <div class="audio-player">
        <audio src="../audio/Arcade - Duncan Laurence.mp3" controls type="audio/mp3"></audio>
    </div>
    <div class="jacket">
        <a href="../audio/Arcade - Duncan Laurence.mp3" class="cta-button" download>Download</a></div> */}
    <article class="lyrics">
        <h1>"Duncan Laurence - Arcade"</h1>
        <br/>
        <br/>
        <div>
            Ooh-ooh-ooh, ooh-ooh, ooh-ooh<br/>
            Ooh-ooh-ooh, ooh-ooh, ooh-ooh<br/>
            <br/>
            A broken heart is all that's left<br/>
            I'm still fixing all the cracks<br/>
            Lost a couple of pieces when<br/>
            I carried it, carried it, carried it home<br/>
            I'm afraid of all I am<br/>
            My mind feels like a foreign land<br/>
            Silence ringing inside my head<br/>
            Please, carry me, carry me, carry me home<br/>
            <br/>
            I've spent all of the love I saved<br/>
            We were always a losing game<br/>
            Small-town boy in a big arcade<br/>
            I got addicted to a losing game<br/>
            <br/>
            Ooh, ooh<br/>
            All I know, all I know<br/>
            Loving you is a losing game<br/>
            <br/>
            How many pennies in the slot?<br/>
            Giving us up didn't take a lot<br/>
            I saw the end 'fore it begun<br/>
            Still I carried, I carried, I carry on<br/>
            <br/>
            Ooh, ooh<br/>
            All I know, all I know<br/>
            Loving you is a losing game<br/>
            Ooh, ooh<br/>
            All I know, all I know<br/>
            Loving you is a losing game<br/>
            <br/>
            I don't need your games, game over<br/>
            Get me off this roller-coaster<br/>
            <br/>
            Ooh, ooh<br/>
            All I know, all I know<br/>
            Loving you is a losing game<br/>
            Ooh, ooh<br/>
            All I know, all I know<br/>
            Loving you is a losing game<br/>
            <br/>
            Ooh-ooh-ooh, ooh-ooh, ooh-ooh<br/>Ooh-ooh-ooh, ooh-ooh, ooh-ooh

        </div>
    </article>
    
    </div>
  )
}

export default Arcade
