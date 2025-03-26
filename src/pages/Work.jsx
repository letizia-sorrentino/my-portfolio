import Projects from "../components/Projects";
import "../styles/Work.css";

const Work = () => {
  return (
    <>
      <div className="intro">
        <div className="introduction">Hi there, I'm Letizia &#128075;</div>
        <div className="introduction">
          I am a frontend developer specialising in React, React Native, Redux Toolkit, and
          Node.js.
        </div>
        <div className="info">
          {" "}
          For more info please visit my{" "}
          <a
            className="link"
            href="https://www.linkedin.com/in/letiziasorrentino/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          or take a look at some examples of my work below.{" "}
        </div>
      </div>
      <div className="selectedWork">
        <h2>SELECTED WORK</h2>
        <Projects />
      </div>
    </>
  );
};

export default Work;
