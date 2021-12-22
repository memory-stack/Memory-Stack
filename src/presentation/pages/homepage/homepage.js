import Text from "../../components/text/text";
import socketIOClient from "socket.io-client";
import { useState, useEffect, useRef } from "react";
import Terminal from "react-animated-term";
import { feedActions } from "../../../domain/stores/store";
import { useSelector, useDispatch } from "react-redux";
import Typewriter from "typewriter-effect";
import { useHistory } from "react-router";
import {
  GET_ALL_LOGS,
  GET_LATEST_LOG,
} from "../../../data/data-source/remote/apiList";
import { spinner } from "../../../data/data-source/local/constants";
import { getRequest } from "../../../data/data-source/remote/apiCall";

function Homepage(props) {
  const sse = props.sse;
  const navigator = useHistory();
  const [values, setValues] = useState({
    liveFeed: {
      typewriter: "",
      textWidget: <Text></Text>,
      username: "",
      rawDateTime: "",
    },
    staticFeed: [],
  });

  var liveFeed = values["liveFeed"];
  var staticFeed = values["staticFeed"];

  useEffect(() => {
    console.log("***************connectino done***************");
    const sse = new EventSource(
      "https://api-memory-stack.herokuapp.com/logStream"
    );

    getRequest(GET_ALL_LOGS).then((res) => {
      var newLogs = res.message;

      console.log("socket is in all logs");
      var tempStaticArray = [];
      for (var i = newLogs.length - 1; i >= 0; i--) {
        const log = newLogs[i];
        const loggedTime = newLogs[i]["localCreationTime"];
        const dateArray = newLogs[i]["localCreationDate"]
          .slice(0, 10)
          .split("-");
        const loggedDate =
          dateArray[2] + "-" + dateArray[1] + "-" + dateArray[0];

        tempStaticArray.push(
          <Text
            username={log["creator"]["username"]}
            type="homeView"
            rawDateTime={loggedDate}
            date={loggedDate}
            time={loggedTime}
            text={log["logMessage"]}
          ></Text>
        );
      }
      setValues({
        liveFeed: values["liveFeed"],
        staticFeed: tempStaticArray,
      });
    });

    sse.onmessage = (e) => getRealtimeData(JSON.parse(e.data));
    // sse.onerror = (e) => {
    //   // sse.close();
    //   const browserUrl = window.location.href;
    //   // if (
    //   //   browserUrl == "http://localhost:3000/" ||
    //   //   browserUrl == "https://memorystack.live"
    //   // )
    //   //   alert(
    //   //     "Some browser extension is preventing realtime updation of logs. Try incognito mode or refresh the page."
    //   //   );

    //   console.log(e);
    // };
    return () => {
      sse.close();
    };
  }, []);

  function getRealtimeData(newLog) {
    console.log(newLog);
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

    tempLiveArray.typewriter = `<a style="color:#ffffff;"><span style="color: #A772FF;">$ ${log[
      "creator"
    ]["username"].toLowerCase()}:~</span> ${log[
      "logMessage"
    ].toUpperCase()}</a>`;

    tempLiveArray.textWidget = (
      <Text
        username={log["creator"]["username"]}
        type="homeView"
        rawDateTime={loggedDate}
        date={loggedDate}
        time={loggedTime}
        text={log["logMessage"]}
      ></Text>
    );

    tempLiveArray.username = log["creator"]["username"];
    tempLiveArray.rawDateTime = loggedDate;

    console.log(values["staticFeed"]);
    setValues({
      staticFeed: [liveFeed.textWidget, ...staticFeed],
      liveFeed: tempLiveArray,
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
                  sse.close();
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

              {staticFeed}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
