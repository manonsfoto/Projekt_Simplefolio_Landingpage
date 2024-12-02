import "./Nav.css";
const Nav = () => {
  return (
    <nav>
      <a href="#">
        <h1 className="logo">MY.</h1>
      </a>
      <div>
        <a href="#">projects</a>
        <a href="#">skills</a>
        <a href="#">contact</a>
        <a href="#">dark/light mode</a>
      </div>
    </nav>
  );
};

export default Nav;
