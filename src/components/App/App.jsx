import "./App.css";
import Profile from "../Profile/Profile";
import userData from "../../data/user-data.json";
import friendsData from "../../data/friends.json";
import FriendList from "../FriendList/FriendList";

function App() {
  console.log(friendsData);
  return (
    <>
      <h2> Task 1</h2>
      <hr />
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <hr />
      <h2>Task 2</h2>
      <FriendList friends={friendsData} />
    </>
  );
}

export default App;
