import MessageCard from "./MessageCard";
import "./MessageContainer.css";

const MessageContainer = ({ messages, loading }) => {
  return (
    <div className="message-container" id="style-scrollbar">
      {loading ? (
        <p className="loading">Loading...</p>
      ) : messages.length ? (
        messages.map((message, i) => <MessageCard key={i} message={message} />)
      ) : (
        <p className="loading">Oops! No contacts found!</p>
      )}
    </div>
  );
};

export default MessageContainer;
