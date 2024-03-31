import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="bg-black text-gray-50">
      <div className="container flex items-center justify-center h-screen px-8 mx-auto">
        <div className=" sm:flex sm:items-center sm:justify-between">
          <div className="text-center">
            <h3 className="text-5xl font-bold lg:text-8xl">Sorry :(</h3>
            <p className="my-3">That page cannot be found</p>
            <Link
              to="/"
              className="font-bold transition duration-150 ease-in hover:text-p-blue"
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
