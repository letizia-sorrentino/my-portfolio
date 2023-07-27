import blackLogo from "../assets/blackLogo.svg";
import whiteLogo from "../assets/whiteLogo.svg";
import { useDispatch, useSelector } from "react-redux";
import { setScreenMode , selectIsDarkTheme} from "../features/appManagerSlice";
import Nav from "../navigation/Nav";
import "../styles/Header.css";

const Header = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  const dispatch = useDispatch();

  return (
    <>
      <header>
        <img
          onClick={() => {
            dispatch(setScreenMode(0));
          }}
          src={isDarkTheme ? whiteLogo : blackLogo}
          className="App-logo"
          alt="logo"
        />

        <Nav />
      </header>
    </>
  );
};

export default Header;
