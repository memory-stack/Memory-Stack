import { useParams } from "react-router-dom";
import Text from "../../components/text/text";
import { useHistory } from "react-router-dom";
import { postRequest } from "../../../data/data-source/remote/apiCall";
import { useState, useEffect } from "react";

var feed = [];
var title;
var creationDate = "";
var months = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];
// var finishLoading
function Logs() {
  const { username, date } = useParams();
  const navigator = useHistory();

  function handleUsernameClick() {
    navigator.push(`/${username}`);
  }

  const [isLoading, finishLoading] = useState(true);

  useEffect(async () => {
    feed = [];

    const res = await postRequest("logView", {
      username: username,
      date: date,
    });
    console.log(res);
    title = res.message.thought[0].thought;
    var logs = res.message.logs;
    for (let log of logs) {
      var message = log.logMessage;
      var time = new Date(log.createdAt);

      var logHour = time.getHours();
      var logMinute = time.getMinutes();
      var logSecond = time.getSeconds();

      var logDate = time.getDate();
      var logMonth = months[time.getMonth() - 1];
      var logYear = time.getFullYear();

      creationDate = `${logDate}TH ${logMonth} ${logYear}`;

      if (logHour < 10) logHour = "0" + logHour.toString();
      if (logMinute < 10) logMinute = "0" + logMinute.toString();
      if (logSecond < 10) logSecond = "0" + logSecond.toString();

      logHour = logHour.toString();
      logMinute = logMinute.toString();
      logSecond = logSecond.toString();

      const loggedTime = `${logHour}${logMinute}`;

      feed.push(
        <Text type="logView" date="" time={loggedTime} text={message}></Text>
      );
    }

    finishLoading(false);
  }, []);

  return (
    <div className="body">
      <p className="headingNopadding">
        {isLoading ? "LOADING..." : title.toUpperCase()}
      </p>
      <p className="subHeadline">
        <span className="link" onClick={handleUsernameClick}>
          {username.toUpperCase()}
        </span>{" "}
        - {isLoading ? "LOADING..." : creationDate}.
      </p>
      <div className="logs">{isLoading ? [] : feed}</div>
    </div>
  );
}

export default Logs;
