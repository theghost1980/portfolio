import NavLink from "../../components/common-ui/Link/Link";
import "./not-found.css";

//TODO redo as 3d model
const NotFound = () => {
  return (
    <div className="not-found-page">
      <img className="image" src="src/assets/svgs/404-not-found-space.svg" />
      <NavLink to="/" linkText="Go Home" />
    </div>
  );
};

export default NotFound;
