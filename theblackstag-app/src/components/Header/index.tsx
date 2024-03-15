import Logo from "./logo";
import Nav from "./nav";

const Header: React.FC = () => {
  return (
    <header>
      <div className="container h-28 flex items-end justify-between">
        <Logo color={true} />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
