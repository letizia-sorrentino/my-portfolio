import html from "../assets/techStack/html5-plain.svg";
import css from "../assets/techStack/css3-plain.svg";
import canva from "../assets/techStack/canva-original.svg";
import javaScript from "../assets/techStack/javascript-original.svg";
import sass from "../assets/techStack/sass-original.svg";
import react from "../assets/techStack/react-original.svg";
import redux from "../assets/techStack/redux-original.svg";
import node from "../assets/techStack/nodejs-plain.svg";
import git from "../assets/techStack/git-plain.svg";
import vsCode from "../assets/techStack/vscode-original.svg";
import typescript from "../assets/techStack/typescript-original.svg";
import "../styles/About.css";

const TechStack = () => {
  return (
    <div className="techStackContainer">
      <figure>
        {" "}
        <img className="html" src={html} alt="html" />
        <figcaption>HTML</figcaption>
      </figure>

      <figure>
        {" "}
        <img className="css" src={css} alt="css" />
        <figcaption>CSS 3</figcaption>
      </figure>

      <figure>
        {" "}
        <img className="javaScript" src={javaScript} alt="javaScript" />
        <figcaption>JAVASCRIPT</figcaption>
      </figure>

      <figure>
        {" "}
        <img className="sass" src={sass} alt="sass" />
        <figcaption>SASS</figcaption>
      </figure>

      <figure>
        {" "}
        <img className="react" src={react} alt="react" />
        <figcaption>REACT</figcaption>
      </figure>

      <figure>
        {" "}
        <img className="redux" src={redux} alt="redux" />
        <figcaption>REDUX</figcaption>
      </figure>

      <figure>
        {" "}
        <img className="typescript" src={typescript} alt="typescript" />
        <figcaption>TYPESCRIPT</figcaption>
      </figure>

      <figure>
        {" "}
        <img className="node" src={node} alt="node" />
        <figcaption>NODE</figcaption>
      </figure>

      <figure>
        {" "}
        <img className="git" src={git} alt="git" />
        <figcaption>GIT</figcaption>
      </figure>

      <figure>
        {" "}
        <img className="vsCode" src={vsCode} alt="vsCode" />
        <figcaption>VSCODE</figcaption>
      </figure>

      <figure>
        {" "}
        <img className="canva" src={canva} alt="canva" />
        <figcaption>CANVA</figcaption>
      </figure>
    </div>
  );
};

export default TechStack;
