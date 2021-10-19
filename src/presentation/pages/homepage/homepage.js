import Text from "../../components/text/text";

function Homepage() {
  const feed = [
    <Text
      type="homeView"
      date="21 - 06 - 1876"
      time="1400"
      text="STUCK IN THE SEA WITH NOWHERE TO GO."
    ></Text>,
    <Text
      type="homeView"
      date="21 - 06 - 1876"
      time="1400"
      text="STUCK IN THE SEA WITH NOWHERE TO GO."
    ></Text>,
    <Text
      type="homeView"
      date="21 - 06 - 1876"
      time="1400"
      text="STUCK IN THE SEA WITH NOWHERE TO GO."
    ></Text>,
    <Text
      type="homeView"
      date="21 - 06 - 1876"
      time="1400"
      text="STUCK IN THE SEA WITH NOWHERE TO GO."
    ></Text>,
    <Text
      type="homeView"
      date="21 - 06 - 1876"
      time="1400"
      text="STUCK IN THE SEA WITH NOWHERE TO GO."
    ></Text>,
    <Text
      type="homeView"
      date="21 - 06 - 1876"
      time="1400"
      text="STUCK IN THE SEA WITH NOWHERE TO GO."
    ></Text>,
    <Text
      type="homeView"
      date="21 - 06 - 1876"
      time="1400"
      text="STUCK IN THE SEA WITH NOWHERE TO GO."
    ></Text>,
    <Text
      type="homeView"
      date="21 - 06 - 1876"
      time="1400"
      text="STUCK IN THE SEA WITH NOWHERE TO GO."
    ></Text>,
    <Text
      type="homeView"
      date="21 - 06 - 1876"
      time="1400"
      text="STUCK IN THE SEA WITH NOWHERE TO GO."
    ></Text>,
    <Text
      type="homeView"
      date="21 - 06 - 1876"
      time="1400"
      text="STUCK IN THE SEA WITH NOWHERE TO GO."
    ></Text>,
    <Text
      type="homeView"
      date="21 - 06 - 1876"
      time="1400"
      text="STUCK IN THE SEA WITH NOWHERE TO GO."
    ></Text>,
    <Text
      type="homeView"
      date="21 - 06 - 1876"
      time="1400"
      text="STUCK IN THE SEA WITH NOWHERE TO GO."
    ></Text>,
    <Text
      type="homeView"
      date="21 - 06 - 1876"
      time="1400"
      text="STUCK IN THE SEA WITH NOWHERE TO GO."
    ></Text>,
    <Text
      type="homeView"
      date="21 - 06 - 1876"
      time="1400"
      text="STUCK IN THE SEA WITH NOWHERE TO GO."
    ></Text>,
    <Text
      type="homeView"
      date="21 - 06 - 1876"
      time="1400"
      text="STUCK IN THE SEA WITH NOWHERE TO GO."
    ></Text>,
    <Text
      type="homeView"
      date="21 - 06 - 1876"
      time="1400"
      text="STUCK IN THE SEA WITH NOWHERE TO GO."
    ></Text>,
  ];

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
        <p className="heading">RECENT LOGS</p>
        <div className="logs">{feed}</div>
      </div>
    </div>
  );
}

export default Homepage;
