import Logo from "./logo";
import Nav from "./nav";

const Header: React.FC = () => {
  return (
    <header>
      <div className="container h-28 flex items-end justify-between">
        <Logo />
        <Nav />
      </div>
    </header>
  );
};

export default Header;