import React from "react";

export default function Projects() {
  return (
    <div>
      {/* <div className="full-screen">
        <div className="section-title ">Projects</div>
        <div className="project-page-description">
          A short selection of recent work.
        </div>
        <div className = 'display-container'>
        <div className="project1-container">
          <div className="box"></div>
          <div className="box1"></div>
          <div className="box-content">
            <div className="project-title">Time Tracker</div>
            <div className="text-muted subtitle">
              A PTO and OT Management System
            </div>
          </div>
        </div>
        </div>
        <div className="projects-2-3-container">
          <div className="p2-content">
            <div className="project-title">The Gaming Codex</div>
            <div className="text-muted subtitle">
              Visualizations of a Game-based Dataset
            </div>
          </div>
          <div className="p3-content">
            <div className="project-title">Vidio</div>
            <div className="text-muted subtitle">
              A Music Streaming Site Utilizing Youtube's API
            </div>
          </div>
        </div>
        <div className="p4-content">
          <div className="project-title">Memory Cards</div>
          <div className="text-muted subtitle">A Flashcards App</div>
        </div>
      </div> */}

      <div className="projects-flex">
        <div className="section-title ">Projects</div>
        <div className="project-page-description">
          A short selection of recent work.
        </div>
        <hr></hr>
        <div className="project">
          <div className="project-title">
            Same Page <br></br>
            <small className="text-muted">Time Tracker</small>
          </div>
          <div className="text-muted subtitle">
            A PTO Management System (WIP)
          </div>
          <div
            className="project-image img1"
            alt="Preliminary Procreate-sketch for Same Page app"
          ></div>
          <div className="column-container">
            <div className="column-1">
              <ul className="ul-projects">
                <li className="list">React</li>
                <li className="list">JWT</li>
                <li className="list">Django REST</li>
                <li className="list">FullCalendar.io</li>
                <li className="list">MySql</li>
              </ul>
            </div>
            <div className="column-1">
              <ul className="ul-projects">
                <li className="list">HTML</li>
                <li className="list">CSS</li>
                <li className="list">Javascript</li>
                <li className="list">Python</li>
              </ul>
            </div>
          </div>
          <div className="one-column">
            <ul className="ul-projects">
              <li className="list">React</li>
              <li className="list">JWT</li>
              <li className="list">Django REST</li>
              <li className="list">FullCalendar.io</li>
              <li className="list">MySql</li>

              <li className="list">HTML</li>
              <li className="list">CSS</li>
              <li className="list">Javascript</li>
              <li className="list">Python</li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <div className="project">
          <div className="project-title">The Gaming Codex</div>
          <div className="text-muted subtitle ">
            Visualizations of a Game-based Dataset
          </div>
          <div
            className="project-image img2"
            alt="A data visualization project using Nintendo API"
          ></div>
          <div className="column-container">
            <div className="column-1">
              <ul className="ul-projects">
                <li className="list">React</li>
                <li className="list">Java</li>
                <li className="list">Java Spring</li>
                <li className="list">Nintendo API</li>
              </ul>
            </div>
            <div className="column-1">
              <ul className="ul-projects">
                <li className="list">HTML</li>
                <li className="list">CSS</li>
                <li className="list">Javascript</li>
              </ul>
            </div>
          </div>
          <div className="one-column">
            <ul className="ul-projects">
              <li className="list">React</li>
              <li className="list">Java</li>
              <li className="list">Java Spring</li>
              <li className="list">Nintendo API</li>

              <li className="list">HTML</li>
              <li className="list">CSS</li>
              <li className="list">Javascript</li>
            </ul>
          </div>
          {/* <iframe
          className="project-image img2"
          alt="A data visualization project"
          width="320"
          height="180"
          src={'https://www.youtube.com/embed/oEosVTV8ObY;autoplay=1&mute=1'}
          allowfullscreen>
        </iframe> */}
        </div>
        <hr></hr>
        <div className="project">
          <div className="project-title">Vid.io</div>
          <div className="text-muted subtitle">
            A Music Streaming Site Utilizing Youtube's API
          </div>

          <div
            className="project-image img3"
            alt="A VideoPlayer app using Youtube's API"
          ></div>
          <div className="column-container">
            <div className="column-1">
              <ul className="ul-projects">
                <li className="list">React</li>
                <li className="list">JWT</li>
                <li className="list">Django REST</li>
                <li className="list">YouTube API</li>
              </ul>
            </div>
            <div className="column-1">
              <ul className="ul-projects">
                <li className="list">HTML</li>
                <li className="list">CSS</li>
                <li className="list">Javascript</li>
                <li className="list">Python</li>
              </ul>
            </div>
          </div>
          <div className="one-column">
            <ul className="ul-projects">
              <li className="list">React</li>
              <li className="list">JWT</li>
              <li className="list">Django REST</li>
              <li className="list">YouTube API</li>
              <li className="list">HTML</li>
              <li className="list">CSS</li>
              <li className="list">Javascript</li>
              <li className="list">Python</li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <div className="project">
          <div className="project-title">Memory Cards</div>
          <div className="text-muted subtitle">A Flashcards App</div>
          <div
            className="project-image img4"
            alt="A customizable flashcards app"
          ></div>
          <div className="column-container">
            <div className="column-1">
              <ul className="ul-projects">
                <li className="list">React</li>
                <li className="list">Django REST</li>
                <li className="list">Python</li>
              </ul>
            </div>
            <div className="column-1">
              <ul className="ul-projects">
                <li className="list">HTML</li>
                <li className="list">CSS</li>
                <li className="list">Javascript</li>
              </ul>
            </div>
          </div>
          <div className="one-column">
            <ul className="ul-projects">
              <li className="list">React</li>
              <li className="list">Django REST</li>
              <li className="list">Python</li>
              <li className="list">HTML</li>
              <li className="list">CSS</li>
              <li className="list">Javascript</li>
            </ul>
          </div>
        </div>

        <hr></hr>
      </div>
    </div>
  );
}
