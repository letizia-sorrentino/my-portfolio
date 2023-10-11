import Projects from "../components/Projects";
import "../styles/Work.css";

const Work = () => {
  return (
    <>
      <section className="intro">
        <h1 className="introduction">
          Hi, I'm Letizia, I am a frontend engineer based in London.{" "}
        </h1>
        <p className="techInfo"> </p>
      </section>
      <section className="selectedWork">
        <h2>SELECTED WORK</h2>
        <Projects />
      </section>
    </>
  );
};

export default Work;
