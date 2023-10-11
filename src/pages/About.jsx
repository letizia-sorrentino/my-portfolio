import profilePicture from "../assets/profilePicture.jpeg";
import html from "../assets/techStack/html5-plain.svg";
import css from "../assets/techStack/css3-plain.svg";
import canva from "../assets/techStack/canva-original.svg";
import javaScript from "../assets/techStack/javascript-original.svg";
import sass from "../assets/techStack/sass-original.svg";
import react from "../assets/techStack/react-original.svg";
import redux from "../assets/techStack/redux-original.svg";
import node from "../assets/techStack/nodejs-plain.svg";
import git from "../assets/techStack/git-plain.svg";
import vsCode from "../assets/techStack/vscode-original.svg";
import "../styles/About.css";

const About = () => {
  return (
    <div>
      <h1>About me</h1>
      <h2>Letizia Sorrentino</h2>

      <div className="bioContainer">
        <img className="profilePicture" src={profilePicture} alt="profile" />
        <div className="personalInfo">
          <p className="bio">
            I enjoy developing web apps that feature clean code, user experience
            and design aesthetics. The technologies I use include React, Redux
            Toolkit and Node.js.
          </p>
          <p>
            I blog about sustainability and zero waste, and have one masters'
            degree in linguistics and one in marketing.
          </p>

          <p>
            {" "}
            I am currently open to frontend software engineer roles. To see my
            resume click{" "}
            <a className="link"
              href="https://drive.google.com/file/d/1e0pcli3gKP07KpWEVNSdtSr4ajhBIvqx/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>{" "}
            or check the links below for more examples of my work.
          </p>
          <h2>Links:</h2>
          <ul>
            <li>
              <a 
                href="https://github.com/letizia-sorrentino"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/letiziasorrentino/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href=" https://bambooandgreen.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog (in italian)
              </a>
            </li>
          </ul>
        </div>
      </div>

      <h2>Tech Stack</h2>
      <div className="techStackContainer">
        <img className="html" src={html} alt="html" />
        <img className="css" src={css} alt="css" />
        <img className="javaScript" src={javaScript} alt="javaScript" />
        <img className="sass" src={sass} alt="sass" />
        <img className="react" src={react} alt="react" />
        <img className="redux" src={redux} alt="redux" />
        <img className="node" src={node} alt="node" />
        <img className="git" src={git} alt="git" />
        <img className="vsCode" src={vsCode} alt="vsCode" />
        <img className="canva" src={canva} alt="canva" />
      </div>
    </div>
  );
};

export default About;
