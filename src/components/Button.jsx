import { Link } from "react-router-dom";

function Button({ title, path }) {
  return (
    <Link
      to={path}
      className="btn-grad w-[250px] font-krub tracking-wide font-medium z-[10]"
    >
      {title}
    </Link>
  );
}

export default Button;
