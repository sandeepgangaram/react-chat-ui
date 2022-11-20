import "./MessageCard.css";

const MessageCard = ({ message }) => {
  const { name, cell, picture } = message;

  return (
    <div className="message-card">
      <div className="message-card-img">
        <img src={picture.thumbnail} alt={name.first} />
      </div>
      <div className="message-card-text">
        <h5>{`${name.first} ${name.last}`}</h5>
        <p>
          <em>{cell}</em>
        </p>
      </div>
    </div>
  );
};

export default MessageCard;
