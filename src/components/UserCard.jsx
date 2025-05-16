const imgNotFound =
  "https://media.istockphoto.com/id/1444047509/vector/coming-soon-photo-icon-with-loading-circle-no-picture-no-image-available.webp?s=2048x2048&w=is&k=20&c=SBjjvfFcckKIe06QJbIWLKR8I5iQ4AH27yoJL2Bkk9g=";

function UserCard({ user }) {
  return (
    <div className="item-card-container">
      {/* Top - UserImage */}
      <div className="item-img">
        <img
          id="item-card-img"
          src={user.avatar_url ? user.avatar_url : imgNotFound}
          alt={user.username}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = imgNotFound;
          }}
        />
      </div>

      {/* Middle - Item Name */}
      <div className="item-name">{user.username}</div>

      {/* Bottom */}
      <div className="item-name">Kudos: {user.kudos}</div>
      {/* End */}
    </div>
  );
}

export default UserCard;
