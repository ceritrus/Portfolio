import { useState } from "react";
import "./App.css";

import Three from "./components/Three";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="background">
        <Three />
      </div>
      <Navbar />

      <section className="hello" id="home">
        <h1>{"< HELLO />"}</h1>
        <p>
          My name is Camille Péricat, I am a developper based in Toulouse,
          France.
          <br />I make stuff sometimes.
        </p>
      </section>

      <div className="spacer wavetop"></div>

      <section className="opaque" id="info">
        <h1># INFO</h1>
        <p>
          Born in 2003 in the south of France, my passion for programming began
          during my teenage years when I discovered I could make video games of
          my own, or at least try to. <br /> Little did I know this was the
          beginning of a <b>great adventure</b>.
          <br />
          <br />
          Studied at <b>42</b> in Lyon from 2021 to 2024 where I realized I
          could make a career out of my passion and got to work on a wide
          variety of projects with cool people. <br />
          Currently studying at <b>Dawan</b> in Toulouse in hopes of becoming a
          full stack developer.
          <br />
          <br />I am proefficient in <b>C</b>, <b>C++</b>, <b>C#</b>,{" "}
          <b>Python</b>, <b>JavaScript</b>, <b>TypeScript</b>,<b>SQL</b>,{" "}
          <b>HTML</b> and <b>CSS</b>
        </p>
      </section>

      <div className="spacer wavebot"></div>

      <section className="left" id="projects">
        <h1># PROJECTS</h1>
        <p>
          Doloribus aliquam dolore ipsum nesciunt iusto ex exercitationem sed
          distinctio!
        </p>
      </section>

      <div className="spacer wavetop"></div>

      <section className="opaque" id="contact">
        <h1># Contact</h1>
        <p>
          Quidem doloribus dolorem quaerat possimus ratione quam nihil magnam
          illum.
        </p>
      </section>

      <div className="spacer wavebot"></div>

      <section className="left">
        <h1># ALBERT</h1>
        <p>My coding partner</p>
      </section>
    </div>
  );
}

export default App;
