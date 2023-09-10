import profilePicture from "../assets/profilePicture.jpeg";
import "../styles/About.css";

const About = () => {
  return (
    <div>
      <h1>About me</h1>
      <img className="profilePicture" src={profilePicture} alt="profile" />
      <h2>Letizia Sorrentino</h2>
      <p>
        I'm a frontend engineer specialising in React, Redux toolkit and
        Node.js. I enjoy developing web apps that feature readable code, user
        experience and design aesthetics. I blog about sustainability and zero
        waste, and have one masters' degree in linguistics and one in marketing.
      </p>

      <h2>Links:</h2>
      <p>
        GitHub: LinkedIn: https://www.linkedin.com/in/letiziasorrentino/ Check
        out my blog (in Italian): https://bambooandgreen.com/
      </p>

      <h2>Tech Stack</h2>
      <div className="techStackContainer"></div>
    </div>
  );
};

export default About;
