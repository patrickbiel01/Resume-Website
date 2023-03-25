import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';

function Projects() {
    return (
      <>
          <div className="project-image-card">
            <div className='blur-container'>
            </div>
            <h1 className='clearText'>Projects</h1>
          </div>
          <ProjectCard
            title={"Relic Race"}
            subtitle={"An iOS Game"}
            hyperlinks={[ ["https://github.com/patrickbiel01/Maze-Generation", "Maze Generation", "fa-brands fa-github"], ["https://github.com/patrickbiel01/Random-Object-Positioning", "Random Object Positioning Algorithm", "fa-brands fa-github"], ["https://github.com/patrickbiel01/TileManager", "Grid Management System", "fa-brands fa-github"] ]}
            description="Race against an AI or your Friend! Collect 5 Relics before your opponent does, all the while avoiding the malicious monsters that lurk the cavern"
            specialFeatures={
              <div>
                <p>Features:</p>
                <ul>
                  <li>Procedural Maze Generation</li>
                  <li>Graph Theory for Pathfinding AI</li>
                  <li>Peer-to-Peer Connectivity</li>
                  <li>Global Leaderboards using Google Firestore</li>
                  <li>Virtual Currency</li>
                  <li>Rewarding Advertisements</li>
                  <li>Store for Player Skins</li>
                  <li>Email Authentification</li>
                  <li>Minimum Spanning Trees using a breath-first search to randomly position relics</li>
                </ul>
              </div>
            }
            images={["http://patrickbiel.com/images/Relic_Race_Store_XsMax.png", "http://patrickbiel.com/images/Relic_Race_GlobalLeaderboard_XR.png"]}
        ></ProjectCard>

        <ProjectCard
            title={"Audio Visualizer"}
            subtitle={"with a Raspberry PI and an LED strip"}
            hyperlinks={[ ["https://github.com/patrickbiel01/Audio_Visualizer_Pi", "Source Code and Setup Guide", "fa-brands fa-github"] ] }
            description="A Raspberry PI 4 runs a program that performs a Fast-Fourier Transform (FFT) on the mp3 of a song, maps it onto a colour-space and displays the results onto a WS2812b LED Programmable Strip."
            specialFeatures={
              <div>
                <h4>Demo:</h4>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/_Mc0nE9OpsQ?start=46" title="YouTube video player"
                  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
              </div>
            }
            images={["https://raw.githubusercontent.com/patrickbiel01/Audio_Visualizer_Pi/main/hardware_diagram.jpg"]}
        ></ProjectCard>

        <ProjectCard
            title={"Pool Practice"}
            subtitle={"on an ARMv7 DE1-SoC"}
            hyperlinks={[ ["https://cpulator.01xz.net/?sys=arm-de1soc", "Simulate DE1-SoC", "fa-solid fa-microchip"] ] }
            description="The game of pool made for ECE243. It is intended as practice and only contains 3 balls and 1 player. The goal is to hit all the red balls in the hole without letting the white one fall in. The game is run on an ARMv7 DE1-SoC system, a simple CPU with a VGA output"
            specialFeatures={
              <div>
                <h4>Demo:</h4>
						    <iframe width="560" height="315" src="https://www.youtube.com/embed/6yO13jmloTg" title="YouTube video player"
                  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen></iframe>
              </div>
            }
        ></ProjectCard>

        <ProjectCard
            title={"Ultimate Monster Siege Defence"}
            subtitle={"A Tower Defence Game"}
            hyperlinks={[ ["https://github.com/patrickbiel01/Monster-Siege-Defence", "Source Code", "fa-brands fa-github"] ] }
            description="An iOS Tower Defence Game programmed in Swift."
            specialFeatures={
              <div>
                <p>It features:</p>
						    <ul>
                  <li>Tower Building</li>
                  <li>Upgradable Towers</li>
                  <li>Tower-Enemy Targetting System</li>
                  <li>Random Enemy and Path Generation</li>
                  <li>A Meteor that deals AoE damage to enemies</li>
                  <li>Game Saving</li>
						    </ul>
              </div>
            }
            images={["https://raw.githubusercontent.com/patrickbiel01/Monster-Siege-Defence/master/game-screenshot.png"]}
        ></ProjectCard>

        <ProjectCard
            title={"Productive Pupil"}
            subtitle={"A Studying Tool"}
            hyperlinks={[ ["https://chrome.google.com/webstore/detail/productive-pupil/pipmahcfcogdofdpognfdocipgookjnj?fbclid=IwAR3E581PGdYO3RFcJKzHuy_kkQ5577Br9fiAWgMAiQdiCXYjNerwNCO16qUr", "Chrome Store Download", "fa-brands fa-chrome"], ["https://github.com/patrickbiel01/ProficientPupil", "Source Code", "fa-brands fa-github"] ] }
            description="Optimize your workflow by avoiding the rabbit-hole of social media during studying. Increase your productivity and get more work done. This is a Chrome Extension Designed for productivity."
            specialFeatures={
              <div>
                <p>It features:</p>
						    <ul>
                  <li>"Distraction-free Mode" for popular social media sites</li>
                  <li>A customizable block list for domains</li>
						    </ul>
              </div>
            }
            images={["https://raw.githubusercontent.com/patrickbiel01/ProficientPupil/master/productive_pupil_shot1.png", "https://raw.githubusercontent.com/patrickbiel01/ProficientPupil/master/productive_pupil_shot2.png"]}
        ></ProjectCard>

        <ProjectCard
            title={"Othello AI"}
            hyperlinks={[ ["https://github.com/patrickbiel01/Othello_AI", "Source Code", "fa-brands fa-github"] ] }
            description="An AI used for the console, turn-based game Othello. It uses a modified minimax algorithm to determine the best move"
            images={["https://camo.githubusercontent.com/847f546eee57d3fdb6c5d3ae6605ecf53e0ede7f/68747470733a2f2f6d656469612e6765656b73666f726765656b732e6f72672f77702d636f6e74656e742f75706c6f6164732f4d494e5f4d4158312e6a7067"]}
        ></ProjectCard>

        <ProjectCard
            title={"Matrix Calculator"}
            hyperlinks={[ ["http://patrickbiel.com/Matrix-Calculator/", "Click to use", "fa-solid fa-calculator"], ["https://github.com/patrickbiel01/MatrixCalculator", "Source Code", "fa-brands fa-github"] ] }
            description="An online tool that allows the user input 2 NxM matricies and perform a myriad of operations on one or both of them"
            images={["https://raw.githubusercontent.com/patrickbiel01/MatrixCalculator/master/matrix-calculator-screenshot.png"]}
        ></ProjectCard>

        <ProjectCard
            title={"Forum"}
            subtitle={"Forum for Patrick Biel's Games"}
            hyperlinks={[ ["https://github.com/patrickbiel01/UMSD-Forum", "Source Code", "fa-brands fa-github"] ] }
            description="The Forum is made using a SQL database and PHP server-side"
            specialFeatures={
              <div>
                <p>It includes the ability for:</p>
						    <ul>
                  <li>Users to submit posts</li>
                  <li>Admins to remove posts</li>
                  <li>Admins to sign-in</li>
						    </ul>
              </div>
            }
            images={["https://raw.githubusercontent.com/patrickbiel01/UMSD-Forum/master/forum-screenshot.png"]}
        ></ProjectCard>


        <ProjectCard
            title={"Mandelbrot Set"}
            hyperlinks={[ ["http://patrickbiel.com/Mandelbrot-Set/", "Click to Use", "fa-solid fa-calculator"], ["https://github.com/patrickbiel01//Mandelbrot-Set", "Source Code", "fa-brands fa-github"] ] }
            description="A web-based interactive Mandelbrot Set Plot"
            specialFeatures={
              <div>
                <p>It includes the ability to:</p>
						    <ul>
                  <li>Zoom in and out</li>
                  <li>Move around the set</li>
						    </ul>
              </div>
            }
            images={["https://raw.githubusercontent.com/patrickbiel01/Mandelbrot-Set/master/Screen%20Shot%202020-05-26%20at%201.47.30%20PM.png"]}
        ></ProjectCard>


        <ProjectCard
            title={"VIA Rail Accessibile Train Station"}
            description="We were tasked by our client, LeftTurnRightTurn Transit Consulting, to design an disability-accesible VIA Rail station where there are no employees to help those who need it. We made many design documents, carefully considered the scope of the problem and upon much deliberation, came up with this design:"
            images={["https://raw.githubusercontent.com/patrickbiel01/Resume-Website/master/images/via_rail_display.png", "https://raw.githubusercontent.com/patrickbiel01/Resume-Website/master/images/via_rail_layout2D.png", "https://raw.githubusercontent.com/patrickbiel01/Resume-Website/master/images/via_rail_layout3D.png"]}
        ></ProjectCard>


        <ProjectCard
            title={"Weather Forecast"}
            hyperlinks={[ ["https://github.com/patrickbiel01/Weather-Conditions", "Source Code", "fa-brands fa-github"] ] }
            description="A PHP-made website that retrieves weather data for a given location"
            images={["https://raw.githubusercontent.com/patrickbiel01/Weather-Conditions/master/weather-forecast.png"]}
        ></ProjectCard>

      </>
    ); 
}

export default Projects;