import "../styles/common.css";
import FeedbackItem from "../components/feedbackItem";
import { feedbackData } from "../components/interfaces";
import "../styles/home.css";
import { API_URL, ENDPOINTS } from "../api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const exampleData: feedbackData = {
  id: 0,
  created: new Date("2023-12-21 12:29:49.3349291"),
  name: "Feedbacker",
  email: "feedbacker@mail.com",
  subject: "Examples",
  score: 5,
  message: "I like examples.",
};

const HomePage = () => {
  const [amountEntries, setAmountEntries]: any = useState("Many");

  const fetchMaxAmount = async () => {
    var uri = API_URL + ENDPOINTS.feedbacksAmount;
    var data;
    try {
      const response = await fetch(uri);
      data = await response.json();
      //setErrorOccurred(false);
      //setLoadingState(false);
    } catch (error) {
      //setErrorOccurred(true);
      //setLoadingState(false);
      console.log(error);
      return;
    }

    setAmountEntries(data.toString());
  };

  useEffect(() => {
    fetchMaxAmount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <div className="homeInfoContainer">
        <h1>Welcome to Feedbank!</h1>
        <h2>We collect feedback on anything!</h2>
        <h3>
          Everyone has feedback on everything, and we here at Feedbank Inc.
          collect and store your opinions for everyone to see!
        </h3>
      </div>

      <div className="feedbackCountHolder">
        <h1>
          <h1 className="feedbackCount">{amountEntries}</h1> feedback's already
          collected!
        </h1>
        <h2>Add yours to the mix today:</h2>
        <Link to="/submit">
          <button className="submitPageButton">Submit your feedback</button>
        </Link>
      </div>
      <div className="exampleHolder">
        <div className="exampleHolder-Text">
          <h2>Have your opinion displayed in this fashion!</h2>
          <h2>Give us your opinion on anything!</h2>
        </div>
        <FeedbackItem feedback={exampleData} />
      </div>
    </div>
  );
};
export default HomePage;
