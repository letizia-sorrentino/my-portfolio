import profilePicture from "../assets/profilePicture.jpeg";
import "../styles/About.css";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <img
        className="profilePicture"
        src={profilePicture}
        alt="profile"
      />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis repellat inventore sint sed, modi, doloremque totam velit quisquam voluptas error delectus eveniet molestias quo beatae? Totam rem perferendis ut a!</p>
    </div>
  );
};

export default About;
