import React, { useEffect, useState } from "react";
import { feedbackData } from "../components/interfaces";
import FeedbackItem from "../components/feedbackItem";
import { ENDPOINTS, API_URL } from "../api";
import { errorOccurredText, loader } from "../components/common";
import "../styles/common.css";
import { Link } from "react-router-dom";

const FeedbackPage = () => {
  const [data, setData]: Array<any> = useState([]);
  const [offset, setOffset]: any = useState(0);
  const [maxAmount, setmaxAmount]: any = useState(25);
  const numberOfItems: number = 15;
  const [loadingState, setLoadingState]: any = useState(true);
  const [errorOccurred, setErrorOccurred]: any = useState(false);

  const fetchMaxAmount = async () => {
    var url = API_URL + ENDPOINTS.feedbacksAmount;
    var data;
    try {
      const response = await fetch(url);
      data = await response.json();
      setErrorOccurred(false);
      setLoadingState(false);
    } catch (error) {
      setErrorOccurred(true);
      setLoadingState(false);
      console.log(error);
    }

    setmaxAmount(data);
  };

  const fetchData = async () => {
    var uri =
      API_URL +
      ENDPOINTS.feedbacks +
      "?offset=" +
      offset +
      "&limit=" +
      numberOfItems;

    var data;
    try {
      const response = await fetch(uri);
      data = await response.json();
      setErrorOccurred(false);
      setLoadingState(false);
    } catch (error) {
      setErrorOccurred(true);
      setLoadingState(false);
      console.log(error);
    }

    const fetchedData = [];

    for (const key in data) {
      fetchedData.push(data[key]);
    }

    setData(fetchedData);
  };

  useEffect(() => {
    fetchMaxAmount();
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  const backButton = async (event: any) => {
    if (offset !== 0) {
      setOffset(offset - numberOfItems);
    }
  };

  const nextButton = async (event: any) => {
    if (offset <= maxAmount - numberOfItems) {
      setOffset(offset + numberOfItems);
    }
  };

  return (
    <div className="App">
      <h1>Feedbacks</h1>
      <h2>Add yours to the mix today:</h2>
      <Link to="/submit">
        <button className="submitPageButton">Submit your feedback</button>
      </Link>
      {!loadingState && (
        <p>
          Showing feedbacks {offset + 1} - {offset + numberOfItems} (total{" "}
          {maxAmount})
        </p>
      )}
      <p></p>
      <button onClick={backButton}>Back</button>
      <button onClick={nextButton}>Next</button>
      <div className="feedbackContainer">
        {data.map((fData: feedbackData) => (
          <div key={fData.id}>
            <FeedbackItem feedback={fData} />
          </div>
        ))}
      </div>
      {loadingState && loader}
      {errorOccurred && errorOccurredText}
      <button onClick={backButton}>Back</button>
      <button onClick={nextButton}>Next</button>
    </div>
  );
};
export default FeedbackPage;
