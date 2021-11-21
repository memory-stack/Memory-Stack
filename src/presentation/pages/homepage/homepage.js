import Text from '../../components/text/text';
import socketIOClient from 'socket.io-client';
import { useState, useEffect, useRef } from 'react';
import Terminal from 'react-animated-term';
import { feedActions } from '../../../domain/stores/store';
import { useSelector, useDispatch } from 'react-redux';
import Typewriter from 'typewriter-effect';
import { useHistory } from 'react-router';

const socket = socketIOClient('https://api-memory-stack.herokuapp.com');

function Homepage() {
  const spinner = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
  const navigator = useHistory();

  const [values, setValues] = useState({
    liveFeed: {
      typewriter: '',
      textWidget: <Text></Text>,
      username: '',
      rawDateTime: '',
    },
    staticFeed: [],
  });

  var liveFeed = values['liveFeed'];
  var staticFeed = values['staticFeed'];

  useEffect(() => {
    console.log('in the use motherfucking effect');
    socket.connect();

    socket.on('recentLogs', (newLogs) => {
      console.log('connection established');
      var tempStaticArray = [];
      for (var i = newLogs.length - 1; i >= 0; i--) {
        const log = newLogs[i];
        var time = new Date(log['createdAt']);
        var date = time.getDate();
        var month = time.getMonth();
        var year = time.getFullYear();

        if (date < 10) date = '0' + date.toString();
        if (month < 10) month = '0' + month.toString();
        if (year < 10) year = '0' + year.toString();
        const loggedDate = `${date} - ${month} - ${year}`;

        var logHour = time.getHours();
        var logMinute = time.getMinutes();
        var logSecond = time.getSeconds();

        if (logHour < 10) logHour = '0' + logHour.toString();
        if (logMinute < 10) logMinute = '0' + logMinute.toString();
        if (logSecond < 10) logSecond = '0' + logSecond.toString();

        logHour = logHour.toString();
        logMinute = logMinute.toString();
        logSecond = logSecond.toString();

        const loggedTime = `${logHour}:${logMinute}`;

        tempStaticArray.push(
          <Text
            username={log['creator']['username']}
            type="homeView"
            rawDateTime={log['createdAt']}
            date={loggedDate}
            time={loggedTime}
            text={log['logMessage']}
            socket={socket}
          ></Text>
        );

        // tempLogArray.push({
        //   text: `${log["creator"]["username"]}:~ ${log["logMessage"]}`,
        //   cmd: true,
        // });
      }
      setValues({
        ...values,
        staticFeed: tempStaticArray,
      });
    });

    socket.on('newLog', (newLog) => {
      var tempLiveArray = [];

      // console.log(`this is coming from newLog ${tempStaticArray}`);

      const log = newLog;
      var time = new Date(log['createdAt']);
      var date = time.getDate();
      var month = time.getMonth();
      var year = time.getFullYear();

      if (date < 10) date = '0' + date.toString();
      if (month < 10) month = '0' + month.toString();
      if (year < 10) year = '0' + year.toString();
      const loggedDate = `${date} - ${month} - ${year}`;

      var logHour = time.getHours();
      var logMinute = time.getMinutes();
      var logSecond = time.getSeconds();

      if (logHour < 10) logHour = '0' + logHour.toString();
      if (logMinute < 10) logMinute = '0' + logMinute.toString();
      if (logSecond < 10) logSecond = '0' + logSecond.toString();

      logHour = logHour.toString();
      logMinute = logMinute.toString();
      logSecond = logSecond.toString();

      const loggedTime = `${logHour}:${logMinute}`;

      tempLiveArray.typewriter = `<a style="color:#ffffff;"><span style="color: #A772FF;">$ ${log[
        'creator'
      ]['username'].toLowerCase()}:~</span> ${log[
        'logMessage'
      ].toUpperCase()}</a>`;

      tempLiveArray.textWidget = (
        <Text
          username={log['creator']['username']}
          type="homeView"
          rawDateTime={log['createdAt']}
          date={loggedDate}
          time={loggedTime}
          text={log['logMessage']}
          socket={socket}
        ></Text>
      );

      tempLiveArray.username = log['creator']['username'];
      tempLiveArray.rawDateTime = log['createdAt'];
      console.log(values);
      setValues({
        staticFeed: [liveFeed.textWidget, ...staticFeed],
        liveFeed: tempLiveArray,
      });
    });

    return () => {
      console.log('websocket unmounting!!!!!');
      socket.off();
      // socket.disconnect();
    };
  }, [liveFeed, staticFeed, values]);

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
                      text: 'mstak logs',
                      cmd: true,
                    },
                    {
                      text: '✔ Loaded logs',
                      cmd: false,
                      repeat: true,
                      repeatCount: 5000,
                      frames: spinner.map(function (spinner) {
                        return {
                          text: spinner + ' Loading logs',
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
                  socket.disconnect();
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
