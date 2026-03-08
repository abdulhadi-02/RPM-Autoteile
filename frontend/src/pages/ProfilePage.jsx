import { useSelector } from "react-redux";
import "./ProfilePage.css";

function ProfilePage() {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return (
      <div className="profile-page">
        <h1>My Profile</h1>
        <p>Please login to see your profile.</p>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <h1>My Profile</h1>
      <div className="profile-info">
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </div>
    </div>
  );
}

export default ProfilePage;