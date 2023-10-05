import { Link } from "react-router-dom";

function Button({ title }) {
  return (
    <Link
      to="/premium"
      className="btn-grad w-[250px] font-krub tracking-wide font-medium"
    >
      {title}
    </Link>
  );
}

export default Button;
