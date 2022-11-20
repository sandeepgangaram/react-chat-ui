import MessageCard from "./MessageCard";

const MessageContainer = ({ messages }) => {
  return (
    <div>
      {messages.map((message, i) => (
        <MessageCard key={i} />
      ))}
    </div>
  );
};

export default MessageContainer;
