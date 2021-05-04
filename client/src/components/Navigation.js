import "../styles/navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <i class="fab fa-twitter big"></i>
      <hr />

      <Link to="/">
        <i class="fas fa-home"></i>
        <h2>Home</h2>
      </Link>

      <Link to="/discovery">
        <h2>Discovery</h2>
      </Link >

      <Link to="/notification">
        <h2>Notification</h2>
      </Link >

      <Link to="/location">
        <h2>Location</h2>
      </Link >

      <Link to="/lists">
        <h2>Lists</h2>
      </Link >

      <Link to="/profile">
        <h2>Profile</h2>
      </Link>

      <Link to="/other">
        <h2>..Other</h2>
      </Link >

      <button className="btn tw_btn">Tweetle</button>
    </div>
  );
}

export default Navigation;
