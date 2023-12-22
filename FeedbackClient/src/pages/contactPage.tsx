import "../styles/common.css";
import { useParams } from "react-router-dom";

const ContactPage = () => {
  return (
    <div className="App">
      <div className="homeInfoContainer">
        <h1>Got questions?</h1>
        <h2>Contact us</h2>
        <h3>
          All improvement ideas or other can be forwarded to us at:
        </h3>
        <p>contact@feedbanck.com</p>
      </div>
    </div>
  );
};
export default ContactPage;
