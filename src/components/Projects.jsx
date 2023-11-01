import theSimpsonsApp from "../assets/theSimpsonsApp.png";
import loveFoodApp from "../assets/loveFoodApp.png";
import myWeatherApp from "../assets/myWeatherApp.png";
import hackathon from "../assets/hackathon.png";
import Homage from "../assets/homage.png";
import blackGitHubIcon from "../assets/blackGitHubIcon.svg";
import blackLinkIcon from "../assets/blackLinkIcon.svg";
import whiteGitHubIcon from "../assets/whiteGitHubIcon.svg";
import whiteLinkIcon from "../assets/whiteLinkIcon.svg";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../app/appManagerSlice";
import "../styles/Work.css";

const Projects = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <>
      <div className="projectsCardsContainter">
        <div className="projectCard">
          <a
            href="https://lovefoodapp.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="projectCardImage"
              src={loveFoodApp}
              alt="love food project"
            />
          </a>
          <div className="projectCardInfo">
            <h3 className="projectTitle">Love Food App</h3>

            <p className="tech">
              REACT &#8226; REDUX TOOLKIT &#8226; CSS &#8226; NODE.JS &#8226;
              EXPRESS.JS &#8226; SQL
            </p>

            <p className="projectCardDescription">
              A full stack recipe app built with React Redux Toolkit, with data
              provided by the Spoonacular API.
            </p>
            <div
              className={`projectLinks ${
                isDarkTheme ? "darkTheme" : "lightTheme"
              }`}
            >
              <a
                href="https://github.com/letizia-sorrentino/recipe-app-project"
                target="_blank"
                rel="noopener noreferrer"
              >
                <figure className="gitHubButton">
                  {" "}
                  <img
                    className="gitHubIcon"
                    src={isDarkTheme ? whiteGitHubIcon : blackGitHubIcon}
                    alt="gitHub"
                  />{" "}
                  <figcaption
                    className={`caption ${
                      isDarkTheme ? "darkTheme" : "lightTheme"
                    }`}
                  >
                    GitHub Repo
                  </figcaption>
                </figure>{" "}
              </a>
              <a
                href="https://lovefoodapp.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <figure className="LivePreviewButton">
                  <img
                    className="linkIcon"
                    src={isDarkTheme ? whiteLinkIcon : blackLinkIcon}
                    alt="external link icon"
                  />{" "}
                  <figcaption
                    className={`caption ${
                      isDarkTheme ? "darkTheme" : "lightTheme"
                    }`}
                  >
                    Live Preview
                  </figcaption>
                </figure>
              </a>
            </div>
          </div>
        </div>

        <div className="projectCard">
          <a
            href="https://tangerine-speculoos-bed51c.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img
              className="projectCardImage"
              src={theSimpsonsApp}
              alt="Simpsons project"
            />{" "}
          </a>

          <div className="projectCardInfo">
            <h3 className="projectTitle">The Simpsons Quote App</h3>
            <p className="tech">REACT &#8226; REDUX TOOLKIT &#8226; CSS</p>
            <p className="projectCardDescription">
              A Simpsons quote web app built with React Redux Toolkit. Data
              provided by The Simpsons Quote API.
            </p>
            <div
              className={`projectLinks ${
                isDarkTheme ? "darkTheme" : "lightTheme"
              }`}
            >
              <a
                href="https://github.com/letizia-sorrentino/simpsons-redux-toolkit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <figure className="gitHubButton">
                  {" "}
                  <img
                    className="gitHubIcon"
                    src={isDarkTheme ? whiteGitHubIcon : blackGitHubIcon}
                    alt="gitHub"
                  />{" "}
                  <figcaption
                    className={`caption ${
                      isDarkTheme ? "darkTheme" : "lightTheme"
                    }`}
                  >
                    GitHub
                  </figcaption>
                </figure>{" "}
              </a>
              <a
                href="https://tangerine-speculoos-bed51c.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <figure className="LivePreviewButton">
                  <img
                    className="linkIcon"
                    src={isDarkTheme ? whiteLinkIcon : blackLinkIcon}
                    alt="external link icon"
                  />{" "}
                  <figcaption
                    className={`caption ${
                      isDarkTheme ? "darkTheme" : "lightTheme"
                    }`}
                  >
                    Live Preview
                  </figcaption>
                </figure>
              </a>
            </div>{" "}
          </div>
        </div>

        <div className="projectCard">
          <a
            href="https://clever-figolla-0aecb4.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="projectCardImage"
              src={myWeatherApp}
              alt="weather app"
            />
          </a>

          <div className="projectCardInfo">
            <h3 className="projectTitle">My Weather App</h3>
            <p className="tech">HTML &#8226; CSS &#8226; JAVASCRIPT</p>
            <p className="projectCardDescription">
              A weather app built with HTML, CSS, and JavaScript. Data provided
              by OpenWeatherMap API.
            </p>
            <div
              className={`projectLinks ${
                isDarkTheme ? "darkTheme" : "lightTheme"
              }`}
            >
              <a
                href="https://github.com/letizia-sorrentino/weather-app-project"
                target="_blank"
                rel="noopener noreferrer"
              >
                <figure className="gitHubButton">
                  {" "}
                  <img
                    className="gitHubIcon"
                    src={isDarkTheme ? whiteGitHubIcon : blackGitHubIcon}
                    alt="gitHub"
                  />{" "}
                  <figcaption
                    className={`caption ${
                      isDarkTheme ? "darkTheme" : "lightTheme"
                    }`}
                  >
                    GitHub
                  </figcaption>
                </figure>{" "}
              </a>
              <a
                href="https://clever-figolla-0aecb4.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <figure className="LivePreviewButton">
                  <img
                    className="linkIcon"
                    src={isDarkTheme ? whiteLinkIcon : blackLinkIcon}
                    alt="external link icon"
                  />{" "}
                  <figcaption
                    className={`caption ${
                      isDarkTheme ? "darkTheme" : "lightTheme"
                    }`}
                  >
                    Live Preview
                  </figcaption>
                </figure>
              </a>
            </div>{" "}
          </div>
        </div>

        <div className="projectCard">
          <a
            href="https://dainty-cendol-7f73d6.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img
              className="projectCardImage"
              src={Homage}
              alt="homage project"
            />{" "}
          </a>
          <div className="projectCardInfo">
            <h3 className="projectTitle">Homage website</h3>

            <p className="tech">HTML &#8226; SCSS</p>
            <p className="projectCardDescription">
              A pixel-perfect copy of the Revolut Bank homepage, built in HTML
              and SCSS.
            </p>
            <div
              className={`projectLinks ${
                isDarkTheme ? "darkTheme" : "lightTheme"
              }`}
            >
              <a
                href="https://github.com/letizia-sorrentino/homage-scss"
                target="_blank"
                rel="noopener noreferrer"
              >
                <figure className="gitHubButton">
                  {" "}
                  <img
                    className="gitHubIcon"
                    src={isDarkTheme ? whiteGitHubIcon : blackGitHubIcon}
                    alt="gitHub"
                  />{" "}
                  <figcaption
                    className={`caption ${
                      isDarkTheme ? "darkTheme" : "lightTheme"
                    }`}
                  >
                    GitHub
                  </figcaption>
                </figure>{" "}
              </a>
              <a
                href="https://dainty-cendol-7f73d6.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <figure className="LivePreviewButton">
                  <img
                    className="linkIcon"
                    src={isDarkTheme ? whiteLinkIcon : blackLinkIcon}
                    alt="external link icon"
                  />{" "}
                  <figcaption
                    className={`caption ${
                      isDarkTheme ? "darkTheme" : "lightTheme"
                    }`}
                  >
                    Live Preview
                  </figcaption>
                </figure>
              </a>
            </div>
          </div>
        </div>

        <div className="projectCard">
          <a
            href="https://save-my-marriage-team-rocket.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="projectCardImage"
              src={hackathon}
              alt="hackathon-project"
            />
          </a>

          <div className="projectCardInfo">
            <h3 className="projectTitle">Hackathon project </h3>

            <p className="tech">React &#8226; TypeScript &#8226; Tailwind</p>
            <p className="projectCardDescription">
              A hackathon project to reduce the rates of divorce in the UK.
              Reminds users of their anniversary and partner's birthday.
            </p>
            <div
              className={`projectLinks ${
                isDarkTheme ? "darkTheme" : "lightTheme"
              }`}
            >
              <a
                href="https://github.com/letizia-sorrentino/anniversary-reminder"
                target="_blank"
                rel="noopener noreferrer"
              >
                <figure className="gitHubButton">
                  {" "}
                  <img
                    className="gitHubIcon"
                    src={isDarkTheme ? whiteGitHubIcon : blackGitHubIcon}
                    alt="gitHub"
                  />{" "}
                  <figcaption
                    className={`caption ${
                      isDarkTheme ? "darkTheme" : "lightTheme"
                    }`}
                  >
                    GitHub
                  </figcaption>
                </figure>{" "}
              </a>
              <a
                href="https://save-my-marriage-team-rocket.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <figure className="LivePreviewButton">
                  <img
                    className="linkIcon"
                    src={isDarkTheme ? whiteLinkIcon : blackLinkIcon}
                    alt="external link icon"
                  />{" "}
                  <figcaption
                    className={`caption ${
                      isDarkTheme ? "darkTheme" : "lightTheme"
                    }`}
                  >
                    Live Preview
                  </figcaption>
                </figure>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
