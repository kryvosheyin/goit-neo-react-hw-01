import "./App.css";
import Profile from "../Profile/Profile";
import userData from "../../data/user-data.json";
import friendsData from "../../data/friends.json";
import transactionsData from "../../data/transactions.json";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <hr />
      <FriendList friends={friendsData} />
      <hr />
      <TransactionHistory items={transactionsData} />
    </>
  );
}

export default App;
