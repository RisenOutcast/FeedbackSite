import "../styles/feedback.css";
import { profileIcon } from "../components/common";

const FeedbackItem = (props: any) => {
  return (
    <div className="feedbackItem">
      <div className="feedbackItem-top">
        <div className="feedbackItem-info">
          {profileIcon}
          <div>
            <h3>{props.feedback.name}</h3>
            <p>{props.feedback.email}</p>
          </div>
        </div>
        <h2>{props.feedback.score}/5</h2>
      </div>
      <h2 className="feedbackItem-subject">{props.feedback.subject}</h2>
      <div className="feedbackItem-bottom">
        <p>{props.feedback.message}</p>
      </div>
      <p className="feedbackItem-footer">{new Date(props.feedback.created).toLocaleString()}</p>
    </div>
  );
};

export default FeedbackItem;
