import Text from "../../components/text/text";
import socketIOClient from "socket.io-client";
import { useState, useEffect } from "react";

function Homepage() {
  const [feed, setFeed] = useState([]);
  // socket.on("recentLogs", (newLogs) => {});

  useEffect(() => {
    const socket = socketIOClient("https://api-memory-stack.herokuapp.com");
    socket.on("recentLogs", (newLogs) => {
      console.log("connection established");
      var cnt = 0;

      var tempLogArray = [];
      for (var i = newLogs.length - 1; i >= 0; i--) {
        // if (cnt++ > 20) break;
        const log = newLogs[i];
        var time = new Date(log["createdAt"]);
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

        tempLogArray.push(
          <Text
            type="homeView"
            date={loggedDate}
            time={loggedTime}
            text={log["logMessage"]}
          ></Text>
        );
      }
      setFeed(tempLogArray);
    });
  }, []);

  return (
    <div>
      <div className="body">
        <p className="headline">
          An <span>immutable</span> logbook for your past &amp; present.
        </p>
        <p className="subHeadline">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        {feed.length ? (
          <div>
            <p className="heading">RECENT LOGS</p>
            <div className="logs">{feed}</div>
          </div>
        ) : (
          <p className="heading">LOADING ...</p>
        )}
      </div>
    </div>
  );
}

export default Homepage;
