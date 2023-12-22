import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bannerTitle">
      <Link to="/">
        <h1>Feedbank Inc.</h1>
      </Link>
    </div>
  );
};

export default Banner;
