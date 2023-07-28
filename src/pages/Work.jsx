import theSimpsonsApp from "../assets/theSimpsonsApp.png";

import "../styles/Work.css";

const Work = () => {
  return (
    <>
      <section className="intro">
        <h1 className="introduction">
          Frontend developer, with an eye for UX and simple design.
        </h1>
        <p className="techInfo"> Coding in React and Redux Toolkit.</p>
      </section>
      <section className="selectedWork">
        <h2>SELECTED WORK</h2>
        <div className="projectsCardsContainter">
          <div className="projectCard">
            <img
              className="projectCardImage"
              src={theSimpsonsApp}
              alt="Simpsons project"
            />
            <p className="projectCardDescription"></p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
