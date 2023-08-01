import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <p>Not Found</p>
      <Link
        to="/"
        id="backToHomeButton"
        className="p-1 bg-gray-800 rounded text-gray-200"
      >
        Back to Home
      </Link>
    </div>
  );
};
export default NotFound;
