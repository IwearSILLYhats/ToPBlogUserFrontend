import "./Profile.css";

function Profile({ user, logout }) {
  function showToggle() {
    const profile = document.querySelector(".profile");
    profile.classList.toggle("show");
  }

  return (
    <div className="profileCard">
      <button className="profileBtn" onClick={showToggle}>
        Profile
      </button>
      <div className="profile">
        <p>Username</p>
        <p>Email</p>
        <p>Author Site</p>
        <hr />
        <p>Dark Mode</p>
        <p>Profile Color</p>
        <p>Posts/Comments</p>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Profile;
