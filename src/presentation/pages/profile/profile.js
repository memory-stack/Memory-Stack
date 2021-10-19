import { useParams } from "react-router-dom";
import Text from "../../components/text/text";

function Profile() {
  const { username } = useParams();
  const feed = [
    <Text
      type="profileView"
      date="21 - 06 - 1876"
      time="1400"
      text="STUCK IN THE SEA WITH NOWHERE TO GO."
    ></Text>,
    <Text
      type="profileView"
      date="21 - 06 - 1876"
      time="1400"
      text="STUCK IN THE SEA WITH NOWHERE TO GO."
    ></Text>,
    <Text
      type="profileView"
      date="21 - 06 - 1876"
      time="1400"
      text="STUCK IN THE SEA WITH NOWHERE TO GO."
    ></Text>,
    <Text
      type="profileView"
      date="21 - 06 - 1876"
      time="1400"
      text="STUCK IN THE SEA WITH NOWHERE TO GO."
    ></Text>,
    <Text
      type="profileView"
      date="21 - 06 - 1876"
      time="1400"
      text="STUCK IN THE SEA WITH NOWHERE TO GO."
    ></Text>,
    <Text
      type="profileView"
      date="21 - 06 - 1876"
      time="1400"
      text="STUCK IN THE SEA WITH NOWHERE TO GO."
    ></Text>,
    <Text
      type="profileView"
      date="21 - 06 - 1876"
      time="1400"
      text="STUCK IN THE SEA WITH NOWHERE TO GO."
    ></Text>,
    <Text
      type="profileView"
      date="21 - 06 - 1876"
      time="1400"
      text="STUCK IN THE SEA WITH NOWHERE TO GO."
    ></Text>,
    <Text
      type="profileView"
      date="21 - 06 - 1876"
      time="1400"
      text="STUCK IN THE SEA WITH NOWHERE TO GO."
    ></Text>,
    <Text
      type="profileView"
      date="21 - 06 - 1876"
      time="1400"
      text="STUCK IN THE SEA WITH NOWHERE TO GO."
    ></Text>,
    <Text
      type="profileView"
      date="21 - 06 - 1876"
      time="1400"
      text="STUCK IN THE SEA WITH NOWHERE TO GO."
    ></Text>,
    <Text
      type="profileView"
      date="21 - 06 - 1876"
      time="1400"
      text="STUCK IN THE SEA WITH NOWHERE TO GO."
    ></Text>,
    <Text
      type="profileView"
      date="21 - 06 - 1876"
      time="1400"
      text="STUCK IN THE SEA WITH NOWHERE TO GO."
    ></Text>,
    <Text
      type="profileView"
      date="21 - 06 - 1876"
      time="1400"
      text="STUCK IN THE SEA WITH NOWHERE TO GO."
    ></Text>,
    <Text
      type="profileView"
      date="21 - 06 - 1876"
      time="1400"
      text="STUCK IN THE SEA WITH NOWHERE TO GO."
    ></Text>,
    <Text
      type="profileView"
      date="21 - 06 - 1876"
      time="1400"
      text="STUCK IN THE SEA WITH NOWHERE TO GO."
    ></Text>,
  ];

  return (
    <div className="body">
      <p className="heading">
        Memories of <span>{username.toUpperCase()}</span>
      </p>
      <p className="subHeadline">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <p className="heading">LOGS</p>
      {feed}
    </div>
  );
}

export default Profile;
