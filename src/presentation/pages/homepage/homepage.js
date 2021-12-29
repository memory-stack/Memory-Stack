import Text from "../../components/text/text";
import { useState, useEffect } from "react";
import Terminal from "react-animated-term";
import Typewriter from "typewriter-effect";
import { useHistory } from "react-router";
import {
  profileColors,
  spinner,
} from "../../../data/data-source/local/constants";
import usePagination from "./usePagination";
import { useCallback, useRef } from "react";

function Homepage(props) {
  const navigator = useHistory();
  const [lastElementInPage, setlastElementInPage] = useState("");
  const [profileAccentColor, setProfileAccentColor] = useState({});
  const [values, setValues] = useState({
    liveFeed: {
      typewriter: "",
      textWidget: {},
      username: "",
      rawDateTime: "",
    },
    staticFeed: [],
  });

  //Custom hook for pagination
  const [loading, oldFeed, hasMore, lastElementFromServer] =
    usePagination(lastElementInPage);
  const observer = useRef();
  const lastLogElementReef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore && lastElementFromServer != "")
          setlastElementInPage(lastElementFromServer);
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  var liveFeed = values["liveFeed"];
  var staticFeed = values.staticFeed;

  //useEffect to merge the existing list with the list obtained from pagination
  useEffect(() => {
    setValues((prev) => {
      return {
        ...prev,
        staticFeed: [...prev.staticFeed, ...oldFeed],
      };
    });
  }, [oldFeed]);

  //The SSE useEffect
  useEffect(() => {
    const sse = new EventSource("https://mstak.tech/logStream");
    sse.onmessage = (e) => getRealtimeData(JSON.parse(e.data));
    sse.onerror = (e) => {
      console.log(e);
      sse.close();
    };
    return () => {
      sse.close();
    };
  }, []);

  //Function to handle the SSE trigger
  function getRealtimeData(newLog) {
    console.log(newLog);
    var accentColor = profileColors[newLog.creator.color];
    var tempLiveArray = {
      typewriter: "",
      textWidget: <Text></Text>,
      username: "",
      rawDateTime: "",
    };
    const log = newLog;
    const loggedTime = newLog["localCreationTime"];
    const dateArray = newLog["localCreationDate"].slice(0, 10).split("-");
    const loggedDate = dateArray[2] + "-" + dateArray[1] + "-" + dateArray[0];

    tempLiveArray.typewriter = `<a style="color:#ffffff;"><span style="color:${accentColor} ;">$ ${log[
      "creator"
    ]["username"].toLowerCase()}:~</span> ${log[
      "logMessage"
    ].toUpperCase()}</a>`;

    tempLiveArray.textWidget = {
      key: log["_id"],
      username: log["creator"]["username"],
      type: "homeView",
      rawDateTime: loggedDate,
      date: loggedDate,
      time: loggedTime,
      text: log["logMessage"],
      accentColor: accentColor,
    };

    tempLiveArray.username = log["creator"]["username"];
    tempLiveArray.rawDateTime = loggedDate;

    setValues((prevValue) => {
      if (prevValue.staticFeed.length != 0) {
        return {
          staticFeed: [prevValue.liveFeed.textWidget, ...prevValue.staticFeed],
          liveFeed: tempLiveArray,
        };
      }
    });
  }

  return (
    <div>
      <div className="body">
        <p className="headline">
          An <span>immutable</span> logbook for your past &amp; present.
        </p>
        <p className="subHeadline">
          Memory Stack is your time machine to travel through the historical
          epiphanies, your portal to unfold phenomenal future possibilities as
          you constantly log your present moves with Memory Stack.
        </p>
        <p className="heading showMobile">RECENT LOGS</p>
        <a
          href="https://www.npmjs.com/package/mstak"
          target="_blank"
          className="homepageWarning"
          rel="noreferrer"
        >
          Note: Update mstak npm package to set colors.
        </a>

        <div className="shadow">
          <div className="terminalBox">
            <div className="actionButtons">
              <div className="actionButtonRed"></div>
              <div className="actionButtonYellow"></div>
              <div className="actionButtonGreen"></div>
              <p className="terminalHeading">usr@mstak:~ Recent logs</p>
            </div>

            <div className="terminalCommands">
              {staticFeed.length == 0 && (
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
                      repeatCount: 5000,
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

              <div
                onClick={() => {
                  navigator.push(
                    `/${liveFeed.username}/${liveFeed.rawDateTime}/logs`
                  );
                }}
              >
                {liveFeed.typewriter.length != 0 && (
                  <Typewriter
                    options={{
                      strings: liveFeed.typewriter,
                      autoStart: true,
                      loop: false,
                      pauseFor: 100000000000000,
                    }}
                  />
                )}
              </div>

              {staticFeed.map((log, index) => {
                if (log.key != null) {
                  if (index + 1 == staticFeed.length) {
                    return (
                      <Text
                        reference={lastLogElementReef}
                        key={log["key"]}
                        username={log["username"]}
                        type={log["type"]}
                        rawDateTime={log["rawDateTime"]}
                        date={log["date"]}
                        time={log["time"]}
                        text={log["text"]}
                        accentColor={log["accentColor"]}
                      ></Text>
                    );
                  }

                  return (
                    <Text
                      key={log["key"]}
                      username={log["username"]}
                      type={log["type"]}
                      rawDateTime={log["rawDateTime"]}
                      date={log["date"]}
                      time={log["time"]}
                      text={log["text"]}
                      accentColor={log["accentColor"]}
                    ></Text>
                  );
                }
              })}

              {loading && staticFeed.length != 0 && (
                <Terminal
                  lines={[
                    {
                      text: "Loading logs",
                      cmd: false,
                      repeat: true,
                      repeatCount: 5000,
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
