import Projects from "../components/Projects";
import "../styles/Work.css";

const Work = () => {
  return (
    <>
      <section className="intro">
        <div className="introduction">Hi there, I'm Letizia &#128075;</div>
        <div className="introduction">
          I am a frontend engineer specialising in React, Redux Toolkit and
          TypeScript.
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
          or take a look at some examples of my work below:{" "}
        </div>
      </section>
      <section className="selectedWork">
        <h2>SELECTED WORK</h2>
        <Projects />
      </section>
    </>
  );
};

export default Work;
