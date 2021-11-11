import Text from "../../components/text/text";
import socketIOClient from "socket.io-client";
import { useState, useEffect, useRef } from "react";
import Terminal from "react-animated-term";

const AlwaysScrollToBottom = () => {
  const elementRef = useRef();
  useEffect(() => elementRef.current.scrollIntoView());
  return <div ref={elementRef} />;
};

function Homepage() {
  const spinner = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const socket = socketIOClient("https://api-memory-stack.herokuapp.com");
    socket.on("recentLogs", (newLogs) => {
      console.log("connection established");
      console.log(feed.length);
      var cnt = 0;
      setFeed([]);
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

        // tempLogArray.push(
        //   <Text
        //     username={log["creator"]["username"]}
        //     type="homeView"
        //     rawDateTime={log["createdAt"]}
        //     date={loggedDate}
        //     time={loggedTime}
        //     text={log["logMessage"]}
        //   ></Text>
        // );

        tempLogArray.push({
          text: `${log["creator"]["username"]}:~ ${log["logMessage"]}`,
          cmd: true,
        });
      }
      setFeed(tempLogArray);
    });
  }, [setFeed]);

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

        <div className="terminalBox">
          <AlwaysScrollToBottom />

          <div className="actionButtons">
            <div className="actionButtonRed"></div>
            <div className="actionButtonYellow"></div>
            <div className="actionButtonGreen"></div>
            <p className="terminalHeading">usr@mstak:~ Recent logs</p>
          </div>

          <div className="terminalCommands">
            {feed.length == 0 && (
              <Terminal
                lines={[
                  {
                    text: "mstak logs",
                    cmd: true,
                  },
                  {
                    text: "✔ Loaded logs",
                    cmd: false,
                    repeat: true,
                    repeatCount: 5,
                    frames: spinner.map(function (spinner) {
                      return {
                        text: spinner + " Loading logs",
                        delay: 40,
                      };
                    }),
                  },
                ]}
                interval={80}
              />
            )}
            {feed.length != 0 && <Terminal lines={feed} interval={10} />}
          </div>
        </div>
        {/* {feed.length ? (
          <div>
            <p className="heading">RECENT LOGS</p>
            <div className="logs">{feed}</div>
          </div>
        ) : (
          <p className="heading">LOADING ...</p>
        )} */}
      </div>
    </div>
  );
}

export default Homepage;
