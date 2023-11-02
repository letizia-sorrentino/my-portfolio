import { useDispatch, useSelector } from "react-redux";
import {
  setScreenMode,
  toggleTheme,
  selectIsDarkTheme,
} from "../app/appManagerSlice";
import moonIcon from "../assets/moonIcon.png";
import sunIcon from "../assets/sunIcon.png";
import "../styles/Header.css";

const Nav = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  const dispatch = useDispatch();

  return (
    <>
      <div className="navContainer">
        <button
          className="navButton"
          onClick={() => {
            dispatch(setScreenMode(0));
          }}
        >
          WORK
        </button>
      </div>

      <button
        className="navButton"
        onClick={() => {
          dispatch(setScreenMode(1));
        }}
      >
        ABOUT
      </button>

      <button className="navButton">
        {" "}
        <a
          className={`portfolioLink ${
            isDarkTheme ? "darkTheme" : "lightTheme"
          }`}
          href="https://drive.google.com/file/d/1e0pcli3gKP07KpWEVNSdtSr4ajhBIvqx/view?usp=share_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          RESUME
        </a>
      </button>

      <div>
        {" "}
        <button
          className="themeToggleButton"
          onClick={() => {
            dispatch(toggleTheme());
          }}
        >
          {isDarkTheme ? (
            <img className="sunIcon" src={sunIcon} alt="sun icon" />
          ) : (
            <img className="moonIcon" src={moonIcon} alt="moon icon" />
          )}{" "}
        </button>
      </div>
    </>
  );
};

export default Nav;
