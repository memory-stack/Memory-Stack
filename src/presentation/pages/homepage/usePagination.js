import {
  getRequestParams,
  postRequest,
} from "../../../data/data-source/remote/apiCall";
import { GET_ALL_LOGS_PAGINATED } from "../../../data/data-source/remote/apiList";
import { useEffect } from "react";
import { useState } from "react";

export default function usePagination(lastElementInPage) {
  const [loading, setLoading] = useState(true);
  const [oldFeed, setOldFeed] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [lastElementFromServer, setLastElementFromServer] = useState("");

  useEffect(() => {
    setLoading(true);
    getRequestParams(GET_ALL_LOGS_PAGINATED, {
      lastElementId: lastElementInPage,
      limit: 30,
    }).then((res) => {
      var lastElementFromServerTemp = res.lastElementId;
      var newLogs = res.message;
      var tempStaticArray = [];
      for (var i = 0; i < newLogs.length; i++) {
        const log = newLogs[i];
        const loggedTime = newLogs[i]["localCreationTime"];
        const dateArray = newLogs[i]["localCreationDate"]
          .slice(0, 10)
          .split("-");
        const loggedDate =
          dateArray[2] + "-" + dateArray[1] + "-" + dateArray[0];

        tempStaticArray.push({
          key: log["_id"],
          username: log["creator"]["username"],
          type: "homeView",
          rawDateTime: loggedDate,
          date: loggedDate,
          time: loggedTime,
          text: log["logMessage"],
        });
        // console.log(log.logMessage);
        // console.log(loggedTime + log["creator"]["username"]);
      }

      setOldFeed(tempStaticArray);
      setHasMore(tempStaticArray.length > 0);
      setLastElementFromServer(lastElementFromServerTemp);
      setLoading(false);
    });
  }, [lastElementInPage]);
  return [loading, oldFeed, hasMore, lastElementFromServer];
}
