import Projects from "../components/Projects";
import "../styles/Work.css";

const Work = () => {
  return (
    <>
      <section className="intro">
        <div className="introduction">Hi, I'm Letizia, </div>
        <div className="introduction">a frontend engineer specialising in React and Redux Toolkit.</div>
      </section>
      <section className="selectedWork">
        <h2>SELECTED WORK</h2>
        <Projects />
      </section>
    </>
  );
};

export default Work;
