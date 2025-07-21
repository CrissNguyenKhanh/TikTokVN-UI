import handleAlert from "~/myAlert";

function Button() {
  return <div onClick={handleAlert}>Click Me!</div>;
}

export default Button;
