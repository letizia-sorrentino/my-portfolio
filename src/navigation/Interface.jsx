import Work from "../pages/Work";
import About from "../pages/About";
import Resume from "../pages/Resume";
import { useSelector } from "react-redux";
import { selectScreenMode } from "../features/appManagerSlice";

const Interface = () => {
  const screenMode = useSelector(selectScreenMode);

  if (screenMode === 1) {
    return <About />;
  }

  if (screenMode === 2) {
    return <Resume />;
  }

  return <Work />;
};

export default Interface;
