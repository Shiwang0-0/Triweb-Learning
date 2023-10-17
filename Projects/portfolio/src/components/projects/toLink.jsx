import { Link } from "react-scroll";
export const Navigate = ({ to, label }) => {
    return (
      <Link to={to}>
        <button>{label}</button>
      </Link>
    );
  };