import { useParams } from "react-router-dom";
import Text from "../../components/text/text";
import { useEffect, useState } from "react";
import { getRequest } from "../../../data/data-source/remote/apiCall";
import { months } from "../../../data/data-source/local/constants";

var feed = [],
  bio = "";

function Profile() {
  const { username } = useParams();

  const [isLoading, finishLoading] = useState(true);

  useEffect(() => {
    feed = [];
    getRequest(`user/${username}`).then((res) => {
      bio = res.user.about;
      var loggedDates = res.user.date;
      loggedDates.reverse();
      console.log(loggedDates);
      for (let loggedDate of loggedDates) {
        const dateArray = loggedDate.split("/");
        const date =
          months[dateArray[1] - 1] + " " + dateArray[0] + "th, " + dateArray[2];
        feed.push(
          <Text
            type="profileView"
            rawDateTime={loggedDate.replaceAll("/", "-")}
            username={username}
            date={date}
            time=""
            text=""
          ></Text>
        );
      }
      finishLoading(false);
    });
  });

  return (
    <div className="body">
      <p className="heading">
        Memories of <span>{username.toUpperCase()}</span>
      </p>
      <p className="subHeadline">{isLoading ? "LOADING..." : bio}</p>
      {isLoading ? (
        <p className="heading">LOADING...</p>
      ) : (
        <p className="heading">LOGGED DATES</p>
      )}
      {isLoading ? [] : feed}
    </div>
  );
}

export default Profile;
