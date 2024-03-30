import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="container flex items-center justify-center h-screen px-8 mx-auto">
        <div className=" sm:flex sm:items-center sm:justify-between">
          <div className="text-center">
            <h3 className="text-5xl font-bold lg:text-8xl">Sorry :(</h3>
            <p>That page cannot be found</p>
            <p>
              <Link to="/" className="font-bold">
                Go to Homepage
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
