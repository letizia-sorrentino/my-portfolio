import Work from "../pages/Work";
import About from "../pages/About";
import { useSelector } from "react-redux";
import { selectScreenMode } from "../app/appManagerSlice";

const Interface = () => {
  const screenMode = useSelector(selectScreenMode);

  if (screenMode === 1) {
    return <About />;
  }

  if (screenMode === 2) {
    window.location.href =
      "https://drive.google.com/file/d/1e0pcli3gKP07KpWEVNSdtSr4ajhBIvqx/view?usp=share_link";
  }

  return <Work />;
};

export default Interface;
