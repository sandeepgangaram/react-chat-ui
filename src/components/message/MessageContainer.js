import MessageCard from "./MessageCard";
import "./MessageContainer.css";

const MessageContainer = ({ messages }) => {
  return (
    <div className="message-container">
      {messages.map((message, i) => (
        <MessageCard key={i} message={message} />
      ))}
    </div>
  );
};

export default MessageContainer;
