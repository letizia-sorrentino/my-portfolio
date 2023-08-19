import theSimpsonsApp from "../assets/theSimpsonsApp.png";
import LoveFoodApp from "../assets/LoveFoodApp.png";
import "../styles/Work.css";

const Work = () => {
  return (
    <>
      <section className="intro">
        <h1 className="introduction">Frontend Engineer</h1>
        <p className="techInfo"> React.js | Redux.js | Node.js</p>
        <p>
          I enjoy developing web apps that feature clean code, user experience
          and design aesthetics.
        </p>
      </section>
      <section className="selectedWork">
        <h2>SELECTED WORK</h2>
        <div className="projectsCardsContainter">
          <div className="projectCard">
            <img
              className="projectCardImage"
              src={LoveFoodApp}
              alt="Simpsons project"
            />
            <h3 className="projectTitle">Love Food App</h3>
            <p className="tech">
              REACT &#8226; REDUX TOOLKIT &#8226; CSS &#8226; NODE.JS &#8226;
              EXPRESS.JS &#8226; SQL
            </p>
            <p className="projectCardDescription">
              A full stack recipe app built with React Redux Toolkit, with data
              provided by the Spoonacular API.
            </p>
          </div>

          <div className="projectCard">
            <img
              className="projectCardImage"
              src={theSimpsonsApp}
              alt="Simpsons project"
            />
            <h3 className="projectTitle">The Simpsons Quote App</h3>
            <p className="tech">REACT &#8226; REDUX TOOLKIT &#8226; CSS</p>
            <p className="projectCardDescription">
              A Simpsons quote web app built with React Redux Toolkit. Data
              provided by The Simpsons Quote API.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
