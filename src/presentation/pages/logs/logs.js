import { useParams } from "react-router-dom";
import Text from "../../components/text/text";
import { useHistory } from "react-router-dom";
import { postRequest } from "../../../data/data-source/remote/apiCall";
import { useState, useEffect } from "react";
import { months } from "../../../data/data-source/local/constants";
import { GET_DAY_LOG } from "../../../data/data-source/remote/apiList";

var feed = [];
var title;

function Logs() {
  const { username, date } = useParams();
  const navigator = useHistory();

  function handleUsernameClick() {
    navigator.push(`/${username}`);
  }

  const [isLoading, finishLoading] = useState(true);

  useEffect(() => {
    feed = [];

    postRequest(GET_DAY_LOG, {
      username: username,
      date: date.replaceAll("-", "/"),
    }).then((res) => {
      const dateArray = date.split("-");
      title =
        months[dateArray[1] - 1] + " " + dateArray[0] + "th, " + dateArray[2];
      var logs = res.message.logs;
      for (let log of logs) {
        var message = log.logMessage;
        var loggedTime =
          log.localCreationTime.slice(0, 5) +
          log.localCreationTime.slice(8, 11);
        feed.push(
          <Text type="logView" date="" time={loggedTime} text={message}></Text>
        );
      }

      finishLoading(false);
    });
  });

  return (
    <div className="body">
      <p className="headingNopadding">
        {isLoading ? "LOADING..." : title.toUpperCase()}
      </p>
      <p className="subHeadline">
        {"Authored By - "}
        <span className="link" onClick={handleUsernameClick}>
          {username.toUpperCase()}
        </span>
      </p>
      <div className="logs">{isLoading ? [] : feed}</div>
    </div>
  );
}

export default Logs;
