import { useParams } from "react-router-dom";
import Text from "../../components/text/text";
import { useEffect, useState } from "react";
import {
  getRequest,
  postRequest,
} from "../../../data/data-source/remote/apiCall";

var feed = [],
  bio = "";

function Profile() {
  const { username } = useParams();

  const [isLoading, finishLoading] = useState(true);

  useEffect(async () => {
    feed = [];
    const res = await getRequest(`user/${username}`);
    bio = res.user.about;
    var thoughts = res.user.thoughts;
    thoughts.reverse();
    for (let thought of thoughts) {
      console.log(thought);
      var time = new Date(thought.createdAt);
      var text = thought.thought;

      var date = time.getDate();
      var month = time.getMonth();
      var year = time.getFullYear();

      if (date < 10) date = "0" + date.toString();
      if (month < 10) month = "0" + month.toString();
      if (year < 10) year = "0" + year.toString();
      const loggedDate = `${date} - ${month} - ${year}`;

      var logHour = time.getHours();
      var logMinute = time.getMinutes();
      var logSecond = time.getSeconds();

      if (logHour < 10) logHour = "0" + logHour.toString();
      if (logMinute < 10) logMinute = "0" + logMinute.toString();
      if (logSecond < 10) logSecond = "0" + logSecond.toString();

      logHour = logHour.toString();
      logMinute = logMinute.toString();
      logSecond = logSecond.toString();

      const loggedTime = `${logHour}:${logMinute}`;

      feed.push(
        <Text
          type="profileView"
          rawDateTime={thought["createdAt"]}
          username={username}
          date={loggedDate}
          time={loggedTime}
          text={text.toUpperCase()}
        ></Text>
      );
    }
    finishLoading(false);
  }, []);

  return (
    <div className="body">
      <p className="heading">
        Memories of <span>{username.toUpperCase()}</span>
      </p>
      <p className="subHeadline">{isLoading ? "LOADING..." : bio}</p>
      {isLoading ? (
        <p className="heading">LOADING...</p>
      ) : (
        <p className="heading">LOGS</p>
      )}
      {isLoading ? [] : feed}
    </div>
  );
}

export default Profile;
