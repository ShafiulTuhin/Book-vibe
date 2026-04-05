import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center max-w-md w-full">
        <h1 className="text-7xl font-bold text-error">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mt-4">
          Page Not Found
        </h2>
        <p className="py-4 text-base-content/70">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="btn btn-primary w-full sm:w-auto">
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn btn-outline w-full sm:w-auto"
          >
            Go Back
          </button>
        </div>

        <div className="mt-10">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
            alt="Error Illustration"
            className="w-40 mx-auto opacity-80"
          />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
