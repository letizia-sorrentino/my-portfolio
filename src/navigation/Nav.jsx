import { useDispatch, useSelector } from "react-redux";
import {
  setScreenMode,
  toggleTheme,
  selectIsDarkTheme,
} from "../features/appManagerSlice";
import moonIcon from "../assets/moonIcon.png";
import sunIcon from "../assets/sunIcon.png";

const Nav = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  const dispatch = useDispatch();

  return (
    <>
      <div>
        <button
          className="navButton"
          onClick={() => {
            dispatch(setScreenMode(0));
          }}
        >
          WORK
        </button>
      </div>

      <div>
        <button
          className="navButton"
          onClick={() => {
            dispatch(setScreenMode(1));
          }}
        >
          ABOUT
        </button>
      </div>
      <div>
        <button
          className="navButton"
          onClick={() => {
            dispatch(setScreenMode(2));
          }}
        >
          RESUME
        </button>
      </div>
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
