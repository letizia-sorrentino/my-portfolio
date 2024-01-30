import profilePicture from "../assets/profilePicture.jpeg";
import TechStack from "../components/TechStack";
import "../styles/About.css";

const About = () => {
  return (
    <div>
      <h1 className="pageTitle">About Me</h1>

      <div className="bioContainer">
        <img className="profilePicture" src={profilePicture} alt="profile" />
        <div className="personalInfo">
          <p className="bio">
            Hi! I am Letizia, I am a frontend engineer based in London.
          </p>

          <p className="bio">
            I enjoy developing web apps that feature clean code, user experience
            and design aesthetics.
          </p>
          <p className="bio">
            The technologies I use include React, Redux Toolkit, CSS and SCSS.
          </p>
          <p className="bio">
            I blog about sustainability and zero waste, and have one master's
            degree in linguistics and another in marketing.
          </p>

          <p className="bio">
            {" "}
            Recently, I completed The Jump Digital School's Software Engineering
            Course, equipping me with the expertise to develop and deploy
            full-stack applications professionally.
          </p>
          <p className="bio">
            {" "}
            I am currently open to frontend engineer roles. Follow the link to
            see my{" "}
            <a
              className="link"
              href="https://drive.google.com/file/d/1xq-vI54RDeLdP2ZrG9RJmrYiN6eDwkcf/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              resume.
            </a>{" "}
          </p>
          <p>
            Feel free to contact me if you'd like to connect or discuss
            potential collaborations!
          </p>
          <p className="signature">Letizia </p>
        </div>
      </div>

      <h2 className="techStackTitle">Tech Stack</h2>
      <TechStack />
    </div>
  );
};

export default About;
