import blackGitHubIcon from "../assets/blackGitHubIcon.svg";
import whiteGitHubIcon from "../assets/whiteGitHubIcon.svg";
import blackLinkedin from "../assets/blackLinkedin.svg";
import whiteLinkedin from "../assets/whiteLinkedin.svg";
import blackWordpress from "../assets/blackWordpress.svg";
import whiteWordpress from "../assets/whiteWordpress.svg";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../app/appManagerSlice";
import "../styles/Footer.css";

const Footer = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <>
      <div className="footerContainer">
        <h3 className="footerTitle">Connect with Me</h3>
        <div className="iconsContainer">
          <div>
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
            </a>
          </div>
          <div>
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
            </a>
          </div>
          <div>
            <a
              href="https://bambooandgreen.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="wordpress"
                src={isDarkTheme ? whiteWordpress : blackWordpress}
                alt="wordpress"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
