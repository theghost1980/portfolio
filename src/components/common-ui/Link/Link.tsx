import { Link } from "react-router-dom";
//TODO add styles to NavLink

interface NavLinkProps {
  to: string;
  //TODO add skipTranslate..
  linkText: string;
}

const NavLink = ({ to, linkText }: NavLinkProps) => {
  return <Link to={to}>{linkText}</Link>;
};

export default NavLink;
