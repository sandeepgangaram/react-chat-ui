import "./Phone.css";

const Phone = (props) => {
  return (
    <div className="iphone-x">
      <i>Speaker</i>
      <b>Camera</b>
      {props.children}
    </div>
  );
};

export default Phone;
