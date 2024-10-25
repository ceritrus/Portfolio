import icons from "../icons";
import logo from "../assets/logo.webp";
import Dropdown from "./Dropdown";
export default function Navbar() {
  return (
    <div className="navbar">
      <button
        onClick={() => {
          console.log("Home");
        }}
      >
        <img src={logo} alt="Logo"></img>
        {"{ Home }"}
      </button>
      <button
        onClick={() => {
          console.log("Documents");
        }}
      >
        <icons.info className="icon" />
        {"{ Info }"}
      </button>
      <button
        onClick={() => {
          console.log("Projects");
        }}
      >
        <icons.collection className="icon" />
        {"{ Projects }"}
      </button>
      <button
        onClick={() => {
          console.log("Contact");
        }}
      >
        <icons.contact className="icon" />
        {"{ Contact }"}
      </button>

      <button onClick={() => {}}>
        <icons.dice className="icon" />
        {"{ Stuff }"}
      </button>

      <Dropdown
        title="Language"
        style="language-button"
        items={["English", "French"]}
      >
        <icons.language className="icon" />
      </Dropdown>
    </div>
  );
}
