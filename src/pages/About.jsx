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
            I enjoy developing web apps that feature clean code, user experience
            and design aesthetics. The technologies I use include React, Redux
            Toolkit and Node.js.
          </p>
          <p className="bio">
            I blog about sustainability and zero waste, and have one masters'
            degree in linguistics and one in marketing.
          </p>

          <p className="bio">
            {" "}
            I am currently open to frontend software engineer roles. To see my
            resume{" "}
            <a
              className="link"
              href="https://drive.google.com/file/d/1e0pcli3gKP07KpWEVNSdtSr4ajhBIvqx/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              click here
            </a>{" "}
            .{" "}
          </p>
          <h2 className="secondaryTitle">Useful Links:</h2>
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
      <TechStack />
    </div>
  );
};

export default About;
