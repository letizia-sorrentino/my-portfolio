import Work from "../pages/Work";
import About from "../pages/About";
import { useSelector } from "react-redux";
import { selectScreenMode } from "../app/appManagerSlice";

const Interface = () => {
  const screenMode = useSelector(selectScreenMode);

  if (screenMode === 1) {
    return <About />;
  }

  return <Work />;
};

export default Interface;
