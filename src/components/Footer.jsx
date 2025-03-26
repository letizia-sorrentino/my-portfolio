import blackGitHubIcon from "../assets/blackGitHubIcon.svg";
import whiteGitHubIcon from "../assets/whiteGitHubIcon.svg";
import blackLinkedin from "../assets/blackLinkedin.svg";
import whiteLinkedin from "../assets/whiteLinkedin.svg";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../app/appManagerSlice";
import "../styles/Footer.css";

const Footer = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <>
      <div
        className={`footerContainer ${
          isDarkTheme ? "darkTheme" : "lightTheme"
        }`}
      >
        <h3 className="footerTitle">Connect with Me</h3>
        <div className="iconsContainer">
          <figure>
            <a
              href="https://www.linkedin.com/in/letiziasorrentino/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="linkedIn"
                src={isDarkTheme ? whiteLinkedin : blackLinkedin}
                alt="linkedIn"
              />
              <figcaption
                className={`caption ${
                  isDarkTheme ? "darkTheme" : "lightTheme"
                }`}
              >
                LinkedIn
              </figcaption>
            </a>
          </figure>
          <figure>
            <a
              href="https://github.com/letizia-sorrentino"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="gitHub"
                src={isDarkTheme ? whiteGitHubIcon : blackGitHubIcon}
                alt="gitHub"
              />
              <figcaption
                className={`caption ${
                  isDarkTheme ? "darkTheme" : "lightTheme"
                }`}
              >
                GitHub
              </figcaption>
            </a>
          </figure>
        
        </div>
      </div>
    </>
  );
};

export default Footer;
