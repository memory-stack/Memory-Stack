import { useParams } from "react-router-dom";
import Text from "../../components/text/text";
import { useHistory } from "react-router-dom";

function Logs() {
  const { username } = useParams();
  const navigator = useHistory();

  function handleUsernameClick() {
    navigator.push(`/${username}`);
  }
  const feed = [
    <Text
      type="logView"
      date="21 - 06 - 1876"
      time="1400"
      text="Just woke up. Have endsem in 24 hrs."
    ></Text>,
    <Text
      type="logView"
      date="21 - 06 - 1876"
      time="1400"
      text="Just woke up. Have endsem in 24 hrs."
    ></Text>,
    <Text
      type="logView"
      date="21 - 06 - 1876"
      time="1400"
      text="Just woke up. Have endsem in 24 hrs."
    ></Text>,
    <Text
      type="logView"
      date="21 - 06 - 1876"
      time="1400"
      text="Just woke up. Have endsem in 24 hrs."
    ></Text>,
    <Text
      type="logView"
      date="21 - 06 - 1876"
      time="1400"
      text="Just woke up. Have endsem in 24 hrs."
    ></Text>,
    <Text
      type="logView"
      date="21 - 06 - 1876"
      time="1400"
      text="Just woke up. Have endsem in 24 hrs."
    ></Text>,
    <Text
      type="logView"
      date="21 - 06 - 1876"
      time="1400"
      text="Just woke up. Have endsem in 24 hrs."
    ></Text>,
    <Text
      type="logView"
      date="21 - 06 - 1876"
      time="1400"
      text="Just woke up. Have endsem in 24 hrs."
    ></Text>,
    <Text
      type="logView"
      date="21 - 06 - 1876"
      time="1400"
      text="Just woke up. Have endsem in 24 hrs."
    ></Text>,
    <Text
      type="logView"
      date="21 - 06 - 1876"
      time="1400"
      text="Just woke up. Have endsem in 24 hrs."
    ></Text>,
    <Text
      type="logView"
      date="21 - 06 - 1876"
      time="1400"
      text="Just woke up. Have endsem in 24 hrs."
    ></Text>,
    <Text
      type="logView"
      date="21 - 06 - 1876"
      time="1400"
      text="Just woke up. Have endsem in 24 hrs."
    ></Text>,
    <Text
      type="logView"
      date="21 - 06 - 1876"
      time="1400"
      text="Just woke up. Have endsem in 24 hrs."
    ></Text>,
    <Text
      type="logView"
      date="21 - 06 - 1876"
      time="1400"
      text="Just woke up. Have endsem in 24 hrs."
    ></Text>,
    <Text
      type="logView"
      date="21 - 06 - 1876"
      time="1400"
      text="Just woke up. Have endsem in 24 hrs."
    ></Text>,
    <Text
      type="logView"
      date="21 - 06 - 1876"
      time="1400"
      text="Just woke up. Have endsem in 24 hrs."
    ></Text>,
  ];

  return (
    <div className="body">
      <p className="headingNopadding">STUCK IN THE SEA WITH NOWHERE TO GO.</p>
      <p className="subHeadline">
        <span className="link" onClick={handleUsernameClick}>
          {username.toUpperCase()}
        </span>{" "}
        - 15TH OCTOBER 2021.
      </p>
      <div className="logs">{feed}</div>
    </div>
  );
}

export default Logs;
