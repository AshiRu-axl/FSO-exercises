const SuccedMessage = ({ type, text }) => {
  if (type === null) return null;

  const color = type === "succed" ? "message succed" : " message error";
  return <div className={color}>{text}</div>;
};
export default SuccedMessage;
