import style from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={style.cardContent}>
      <div>
        <img src={image} alt="User avatar" className={style.image} />
        <p className={style.userName}>{name}</p>
        <p className={style.userInfo}>@{tag}</p>
        <p className={style.userInfo}>{location}</p>
      </div>
      <ul>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
