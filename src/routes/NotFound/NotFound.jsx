import { Link } from "react-router-dom";
import "./notfound.css";
const NotFound = () => {
  return (
    <>
      <div className="container">
        <div className="notFound">
          <div className="notFound-txt">
            <h3>Sorry :(</h3>
            <p>That page cannot be found</p>
            <p>
              <Link to="/">Go to Homepage</Link>
            </p>
          </div>
          <img
            loading="lazy"
            src="/img/notfound/notFound.svg"
            alt="Not Found image"
          />
        </div>
      </div>
    </>
  );
};

export default NotFound;
