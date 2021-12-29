import { useHistory } from "react-router";

function Text(props) {
  const navigator = useHistory();
  const username = props.username;
  const rawDateTime = props.rawDateTime;
  const type = props.type;
  const date = props.date;
  const time = props.time;
  const text = props.text;
  const socket = props.socket;
  const reference = props.reference;
  const profileViewStyles = { "text-decoration-color": props.accentColor };
  const accentColor = { color: props.accentColor };
  var toReturn = <p></p>;

  if (type == "homeView")
    toReturn = (
      <p
        style={profileViewStyles}
        ref={reference}
        onClick={() => {
          if (socket != null) socket.disconnect();
          navigator.push(`/${username}/${rawDateTime}/logs`);
        }}
        className="bodyText link"
      >
        <span style={accentColor}>$ {username}:~</span> {text.toUpperCase()}
      </p>
    );
  else if (type == "profileView")
    toReturn = (
      <p
        style={profileViewStyles}
        onClick={() => {
          navigator.push(`/${username}/${rawDateTime}/logs`);
        }}
        className="subHeadline link reduceBottomMargin"
      >
        {date}
      </p>
    );
  else if (type == "logView")
    toReturn = (
      <p className="bodyTextFaded">
        {time} : {text}
      </p>
    );

  return toReturn;
}

export default Text;
