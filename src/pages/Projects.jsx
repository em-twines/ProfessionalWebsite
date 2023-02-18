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
        {/* <div className="project-page-description">
          A short selection of my work.
        </div> */}

        <hr></hr>
        <div className="project">
          <div className="project-title">
            Same Page <br></br>
            <small className="text-muted">Time Tracker</small>
          </div>
          <div className="text-muted subtitle">
            An All-In-One PTO Management System
          </div>
          <div className="horizontal-column">
            <a href="https://github.com/em-twines/same-page-time-tracker">
              <div
                className="img img1"
                alt="Manage Employees Table in Same Page Time Tracker"
              ></div>
            </a>
            <div className="include-button">
              <div>
                <div className="column-container">
                  <div className="column-1">
                    <ul className="ul-projects">
                      <li className="list">React</li>
                      <li className="list">JWT</li>
                      <li className="list">Django REST</li>
                      <li className="list">FullCalendar.io</li>
                      <li className="list">MySQL</li>
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
                    <li className="list">MySQL</li>

                    <li className="list">HTML</li>
                    <li className="list">CSS</li>
                    <li className="list">Javascript</li>
                    <li className="list">Python</li>
                  </ul>
                </div>{" "}
              </div>{" "}
              <div>
                <a href="https://youtu.be/jSsTco6omeE">
                  <button className="button-51 smaller">
                    See it in action!
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr></hr>

        <div className="project">
          <div className="project-title">
            lookingGlass <br></br>
          </div>
          <div className="text-muted subtitle">
            A 3D Unity Game and Video Installation Piece
          </div>
          <div className="horizontal-column">
            <div
              className=" img5"
              alt="Avatar standing in front of a video 'projection'"
            ></div>
            <div className="include-button">
              <div>
                <div className="column-container">
                  <div className="column-1">
                    <ul className="ul-projects">
                      <li className="list">Unty</li>
                      <li className="list">C#</li>
                      <li className="list">Ubuntu</li>
                      <li className="list">Apache</li>
                    </ul>
                  </div>
                  <div className="column-1">
                    <ul className="ul-projects">
                      <li className="list">HTML</li>
                      <li className="list">WinSCP</li>
                      <li className="list">Digital Ocean</li>
                      <li className="list">Adobe Suite</li>
                    </ul>
                  </div>
                </div>
                <div className="one-column">
                  <ul className="ul-projects">
                    <li className="list">Unty</li>
                    <li className="list">C#</li>
                    <li className="list">Ubuntu</li>
                    <li className="list">Apache2</li>

                    <li className="list">HTML</li>
                    <li className="list">WinSCP</li>
                    <li className="list">Digital Ocean</li>
                    <li className="list">Adobe Suite</li>
                  </ul>
                </div>
              </div>{" "}
              <div>
                <a href="https://www.playlookingglass.com/">
                  <button className="button-51 smaller">Play Now on Desktop!</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr></hr>
        <div className="project">
          <div className="project-title">The Gaming Codex</div>
          <div className="text-muted subtitle ">
            Visualizations of a Game-based Dataset
          </div>
          <div className="horizontal-column">
            <a href="https://github.com/GriffithT16/VideoGame_frontend">
              <div
                className="img img2"
                alt="A data visualization project using Nintendo API"
              ></div>
            </a>
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
          </div>
        </div>



        <hr></hr>
        <div className="project">
          <div className="project-title">
            i heard an echo <br></br>
          </div>
          <div className="text-muted subtitle">
            An Interactive Installation for the Weeksville Heritage Center
          </div>
          <div className="horizontal-column">
              <div
                className="img img6"
                alt="Delayed and Ovelayed Video of a Woman Dancing"
              ></div>
            <div className="include-button">
              <div>
                <div className="column-container">
                  <div className="column-1">
                    <ul className="ul-projects">
                    <li className="list">MaxMSP</li>
                    <li className="list">Kinect</li>
                   
                    </ul>
                  </div>
                  <div className="column-1">
                    <ul className="ul-projects">
                    <li className="list">Adobe Suite</li>
                    <li className="list">Arduino</li>

                    </ul>
                  </div>
                </div>
                <div className="one-column">
                  <ul className="ul-projects">
                    <li className="list">MaxMSP</li>
                    <li className="list">Kinect</li>
                    <li className="list">Adobe Suite</li>
                    <li className="list">Arduino</li>

                  </ul>
                </div>{" "}
              </div>{" "}
              <div>
                <a href="https://youtu.be/j3KPb_8Abi4">
                  <button className="button-51 smaller">
                    See Video of the Event!
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>






        <hr></hr>
        <div className="project">
          <div className="project-title">Vid.io</div>
          <div className="text-muted subtitle">
            A Music Streaming Site Utilizing Youtube's API
          </div>
          <div className="horizontal-column">
            <a href="https://github.com/em-twines/YoutubeClone">
              <div
                className="img img3"
                alt="A VideoPlayer app using Youtube's API"
              ></div>
            </a>
            <div className="column-container">
              <div className="column-1">
                <ul className="ul-projects">
                  <li className="list">React</li>
                  <li className="list">JWT</li>
                  <li className="list">YouTube API</li>
                  <li className="list">MySQL</li>
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
        </div>




        <hr></hr>
        <div className="project">
          <div className="project-title">
            UnTwined <br></br>
          </div>
          <div className="text-muted subtitle">
            An Interactive Performance Studying Loss and Memory
          </div>
          <div className="horizontal-column">
              <div
                className="img img7"
                alt="A man stands in front of a wall of digital noise"
              ></div>
            <div className="include-button">
              <div>
                <div className="column-container">
                  <div className="column-1">
                    <ul className="ul-projects">
                    <li className="list">MaxMSP</li>
                    <li className="list">Ableton</li>
                   
                    </ul>
                  </div>
                  <div className="column-1">
                    <ul className="ul-projects">
                    <li className="list">Adobe Suite</li>
                    <li className="list">DSLR Live-Streaming</li>

                    </ul>
                  </div>
                </div>
                <div className="one-column">
                  <ul className="ul-projects">
                    <li className="list">MaxMSP</li>
                    <li className="list">Ableton</li>
                    <li className="list">Adobe Suite</li>
                    <li className="list">DSLR Live-Streaming</li>

                  </ul>
                </div>{" "}
              </div>{" "}
              <div>
                <a href="https://youtu.be/HNz4V5M4188">
                  <button className="button-51 smaller">
                    See Video of the Show!
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>




        <hr></hr>
        <div className="project">
          <div className="project-title">Memory Cards</div>
          <div className="text-muted subtitle">A Flashcards App</div>
          <div className="horizontal-column">
            <a href="https://github.com/em-twines/flashcards">
              <div
                className="img img4"
                alt="A customizable flashcards app"
              ></div>
            </a>
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
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
