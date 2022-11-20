import MessageCard from "./MessageCard";
import "./MessageContainer.css";

const MessageContainer = ({ messages, loading }) => {
  return (
    <div className="message-container" id="style-scrollbar">
      {loading ? (
        <p>Loading...</p>
      ) : (
        messages.map((message, i) => <MessageCard key={i} message={message} />)
      )}
    </div>
  );
};

export default MessageContainer;
