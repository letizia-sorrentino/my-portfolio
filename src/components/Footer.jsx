import "../styles/Footer.css";

const Footer = () => {
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
              LinkedIn
            </a>
          </div>
          <div>
            <a
              href="https://github.com/letizia-sorrentino"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
          <div>
            <a
              href="https://bambooandgreen.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
