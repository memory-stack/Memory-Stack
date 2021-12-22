import React, { useState, useEffect } from "react";
import { render } from "react-dom";

const useEventSource = (url) => {
  const [data, updateData] = useState(null);

  useEffect(() => {
    const source = new EventSource(url);

    source.onmessage = function logEvents(event) {
      updateData(JSON.parse(event.data));
    };
  }, []);

  return data;
};

function App() {
  const data = useEventSource("https://ds.shub.dev/e/temperatures");
  if (!data) {
    return <div />;
  }

  return (
    <div>
      The current temperature in my living room is {data.temperature} as of{" "}
      {data.updatedAt}
    </div>
  );
}

render(<App />, document.getElementById("root"));
