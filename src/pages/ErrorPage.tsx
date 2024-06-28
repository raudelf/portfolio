import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <h1>Caught in 4K</h1>
      <p>Looks like you broke something...</p>
      <Link to="/" className="btn">
        Escape
      </Link>
    </div>
  );
};

export default ErrorPage;
