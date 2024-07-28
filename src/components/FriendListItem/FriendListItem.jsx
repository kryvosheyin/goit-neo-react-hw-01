import style from "./FriendListItem.module.css";
import clsx from "clsx";

const truncateName = (name) => {
  return name.length > 13 ? `${name.substring(0, 10)}...` : name;
};

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={style.userCard}>
      <img className={style.image} src={avatar} alt="Avatar" width="48" />
      <p className={style.userName} title={name}>
        {truncateName(name)}
      </p>
      <p
        className={clsx(style.userStatus, {
          [style.isOnline]: isOnline,
          [style.isOffline]: !isOnline,
        })}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
