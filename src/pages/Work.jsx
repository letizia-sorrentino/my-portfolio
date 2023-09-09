import theSimpsonsApp from "../assets/theSimpsonsApp.png";
import loveFoodApp from "../assets/loveFoodApp.png";
import myWeatherApp from "../assets/myWeatherApp.png";
import Homage from "../assets/homage.png";
import blackGitHubIcon from "../assets/blackGitHubIcon.svg";
import blackLinkIcon from "../assets/blackLinkIcon.svg";
import whiteGitHubIcon from "../assets/whiteGitHubIcon.svg";
import whiteLinkIcon from "../assets/whiteLinkIcon.svg";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../app/appManagerSlice";
import "../styles/Work.css";

const Work = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <>
      <section className="intro">
        <h1 className="introduction">Hi, I'm Letizia! </h1>
        <p className="role">I am frontend engineer based in London.</p>
        <p className="techInfo">
          {" "}
          I enjoy developing web apps that feature clean code, user experience
          and design aesthetics. My tech in React, Redux and Node.js. I have one
          Master's degree in Linguistics and one in Marketing.
        </p>
      </section>
      <section className="selectedWork">
        <h2>SELECTED WORK</h2>
        <div className="projectsCardsContainter">
          <div className="projectCard">
            <img
              className="projectCardImage"
              src={loveFoodApp}
              alt="Simpsons project"
            />
            <div className="projectCardInfo">
              <h3 className="projectTitle">Love Food App</h3>
              <img
                className="gitHubIcon"
                src={isDarkTheme ? whiteGitHubIcon : blackGitHubIcon}
                alt="gitHub"
              />
              <img
                className="linkIcon"
                src={isDarkTheme ? whiteLinkIcon : blackLinkIcon}
                alt="external link icon"
              />
            </div>
            <p className="tech">
              REACT &#8226; REDUX TOOLKIT &#8226; CSS &#8226; NODE.JS &#8226;
              EXPRESS.JS &#8226; SQL
            </p>

            <p className="projectCardDescription">
              A full stack recipe app built with React Redux Toolkit, with data
              provided by the Spoonacular API.
            </p>
          </div>

          <div className="projectCard">
            <img
              className="projectCardImage"
              src={theSimpsonsApp}
              alt="Simpsons project"
            />
            <div className="projectCardInfo">
              <h3 className="projectTitle">The Simpsons Quote App</h3>
              <img
                className="gitHubIcon"
                src={isDarkTheme ? whiteGitHubIcon : blackGitHubIcon}
                alt="gitHub"
              />
              <img
                className="linkIcon"
                src={isDarkTheme ? whiteLinkIcon : blackLinkIcon}
                alt="external link icon"
              />
            </div>

            <p className="tech">REACT &#8226; REDUX TOOLKIT &#8226; CSS</p>
            <p className="projectCardDescription">
              A Simpsons quote web app built with React Redux Toolkit. Data
              provided by The Simpsons Quote API.
            </p>
          </div>

          <div className="projectCard">
            <img
              className="projectCardImage"
              src={myWeatherApp}
              alt="weather app"
            />

            <div className="projectCardInfo">
              <h3 className="projectTitle">My Weather App</h3>
              <img
                className="gitHubIcon"
                src={isDarkTheme ? whiteGitHubIcon : blackGitHubIcon}
                alt="gitHub"
              />
              <img
                className="linkIcon"
                src={isDarkTheme ? whiteLinkIcon : blackLinkIcon}
                alt="external link icon"
              />
            </div>

            <p className="tech">HTML &#8226; CSS &#8226; JAVASCRIPT</p>
            <p className="projectCardDescription">
              A weather app built with HTML, CSS, and JavaScript. Data provided
              by OpenWeatherMap API.
            </p>
          </div>

          <div className="projectCard">
            <img
              className="projectCardImage"
              src={Homage}
              alt="homage project"
            />
            <div className="projectCardInfo">
              <h3 className="projectTitle">Homage website</h3>
              <img
                className="gitHubIcon"
                src={isDarkTheme ? whiteGitHubIcon : blackGitHubIcon}
                alt="gitHub"
              />
              <img
                className="linkIcon"
                src={isDarkTheme ? whiteLinkIcon : blackLinkIcon}
                alt="external link icon"
              />
            </div>
            <p className="tech">HTML &#8226; CSS</p>
            <p className="projectCardDescription">
              A pixel-perfect copy of the Revolut Bank homepage, built in HTML
              and CSS.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
