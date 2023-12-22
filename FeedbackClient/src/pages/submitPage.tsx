import { useRef, useState } from "react";
import { API_URL, ENDPOINTS } from "../api";
import { alreadyExistsText, errorOccurredTextWithoutButton, loader, submittedText } from "../components/common";
import "../styles/submit.css";

const SubmitPage = () => {
  const [charactersEntered, setCharactersEntered] = useState(0);
  const [loadingState, setLoadingState]: any = useState(false);
  const [errorOccurred, setErrorOccurred]: any = useState(false);
  const [alreadyExists, setAlreadyExists]: any = useState(false);
  const [submitted, setSubmitted]: any = useState(false);
  const maxCharacters = 500;

  const nameRef: any = useRef("");
  const emailRef: any = useRef("");
  const subjectRef: any = useRef("");
  const messageRef: any = useRef("");
  const [score, setScore] = useState("1");

  const textCounter = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharactersEntered(messageRef.current.value.length);
  };

  const makeAFeedbackObject = () => {
    const nFeedback = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      subject: subjectRef.current.value,
      score: score,
      message: messageRef.current.value,
    };
    return nFeedback;
  };

  const onOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScore(e.target.value);
  };

  const onSubmitHandler = async (event: any) => {
    event.preventDefault();
    setLoadingState(true);
    setSubmitted(false)
    setAlreadyExists(false)
    const Feedback = makeAFeedbackObject();
    try {
      var uri = API_URL + ENDPOINTS.feedbacks;
      const response = await fetch(
        uri,
        {
          method: "POST",
          body: JSON.stringify(Feedback),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      try {
        const data = await response.json();
        if (data.name === Feedback.name){
          setSubmitted(true)
        }
        if (response.status === 409){
          setAlreadyExists(true)
        }
      } catch (error){
        if (response.status === 409){
          setAlreadyExists(true)
        }
      }
      setErrorOccurred(false);
      setLoadingState(false);
    } catch (error) {
      setErrorOccurred(true);
      setLoadingState(false);
      console.log(error);
    }
    return;
  };



  return (
    <div className="App">
      <h1>Submit Page</h1>
      <form onSubmit={onSubmitHandler}>
        <div className="input-group">
          <input
            ref={nameRef}
            className="input"
            required
            autoComplete="off"
            type="text"
            maxLength={30}
            onKeyDown={(e) => {
              e.key === "Enter" && e.preventDefault();
            }}
          ></input>
          <label className="label" htmlFor="id">
            Name
          </label>
        </div>

        <div className="input-group">
          <input
            ref={emailRef}
            className="input"
            required
            autoComplete="off"
            type="email"
            onKeyDown={(e) => {
              e.key === "Enter" && e.preventDefault();
            }}
          ></input>
          <label className="label" htmlFor="id">
            Email
          </label>
        </div>

        <div className="input-group">
          <input
            ref={subjectRef}
            className="input"
            required
            autoComplete="off"
            type="text"
            maxLength={30}
            onKeyDown={(e) => {
              e.key === "Enter" && e.preventDefault();
            }}
          ></input>
          <label className="label" htmlFor="id">
            Subject
          </label>
        </div>

        <div className="scoreHolder">
          <p>Score:</p>
          <div className="score">
            <input
              type="radio"
              id="star5"
              name="score"
              value="5"
              checked={score === "5"}
              onChange={onOptionChange}
            />
            <label htmlFor="star5" title="text">
              5 stars
            </label>
            <input
              type="radio"
              id="star4"
              name="score"
              value="4"
              checked={score === "4"}
              onChange={onOptionChange}
            />
            <label htmlFor="star4" title="text">
              4 stars
            </label>
            <input
              type="radio"
              id="star3"
              name="score"
              value="3"
              checked={score === "3"}
              onChange={onOptionChange}
            />
            <label htmlFor="star3" title="text">
              3 stars
            </label>
            <input
              type="radio"
              id="star2"
              name="score"
              value="2"
              checked={score === "2"}
              onChange={onOptionChange}
            />
            <label htmlFor="star2" title="text">
              2 stars
            </label>
            <input
              type="radio"
              id="star1"
              name="score"
              value="1"
              checked={score === "1"}
              onChange={onOptionChange}
            />
            <label htmlFor="star1" title="text">
              1 star
            </label>
          </div>
        </div>

        <div className="input-group">
          <textarea
            ref={messageRef}
            className="messageInput"
            autoComplete="off"
            rows={15}
            cols={42}
            maxLength={maxCharacters}
            onKeyDown={(e) => {
              e.key === "Enter" && e.preventDefault();
            }}
            onChange={textCounter}
          ></textarea>
          <label className="label" htmlFor="id">
            Message
          </label>
        </div>
        <div className="submitButton">
          <p>
            {charactersEntered}/{maxCharacters}
          </p>
          <button type="submit" disabled={loadingState}>Submit</button>
        </div>
      </form>
      {loadingState && loader}
      {errorOccurred && errorOccurredTextWithoutButton}
      {submitted && submittedText}
      {alreadyExists && alreadyExistsText}
    </div>
  );
};
export default SubmitPage;
