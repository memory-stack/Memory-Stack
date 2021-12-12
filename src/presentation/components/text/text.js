import { useHistory } from 'react-router';

function Text(props) {
  const navigator = useHistory();
  const username = props.username;
  const rawDateTime = props.rawDateTime;
  const type = props.type;
  const date = props.date;
  const time = props.time;
  const text = props.text;
  const socket = props.socket;
  var toReturn = <p></p>;

  if (type == 'homeView')
    // toReturn = (
    //   <p
    //     onClick={() => {
    //       navigator.push(`/${username}/${rawDateTime}/logs`);
    //     }}
    //     className="bodyText link"
    //   >
    //     <span>{time} :</span> {text.toUpperCase()}
    //   </p>
    // );
    toReturn = (
      <p
        onClick={() => {
          if (socket != null) socket.disconnect();
          navigator.push(`/${username}/${rawDateTime}/logs`);
        }}
        className="bodyText link"
      >
        <span>$ {username}:~</span> {text.toUpperCase()}
      </p>
    );
  else if (type == 'profileView')
    toReturn = (
      <p
        onClick={() => {
          navigator.push(`/${username}/${rawDateTime}/logs`);
        }}
        className="subHeadline link reduceBottomMargin"
      >
        {date}
        {/* : {text.toUpperCase()}*/}
      </p>
    );
  else if (type == 'logView')
    toReturn = (
      <p className="bodyTextFaded">
        {time} : {text}
      </p>
    );

  return toReturn;
}

export default Text;
