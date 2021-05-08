import "../styles/navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <i class="fab fa-twitter tw_logo"></i>
      <hr />
      <div className="icon_div">
      <Link to="/" className="nav_link">
        <i class="fas fa-home ic fa-lg"></i>
        <h2 className="title">Home</h2>
      </Link>

      <Link to="/discovery">
        <h2 className="title">Discovery</h2>
        <i class="fas fa-globe-americas ic fa-lg"></i>
      </Link >

      <Link to="/notification">
        <h2 className="title">Notification</h2>
        <i class="fas fa-bell ic fa-lg"></i>
      </Link >

      <Link to="/location">
        <h2 className="title">Location</h2>
        <i class="fas fa-location-arrow ic fa-lg"></i>
      </Link >

      <Link to="/lists">
        <h2 className="title">Lists</h2>
        <i class="fas fa-clipboard-list ic fa-lg"></i>
      </Link >

      <Link to="/profile">
        <h2 className="title">Profile</h2>
        <i class="fas fa-user ic fa-lg"></i>
      </Link>

      <Link to="/other">
        <h2 className="title">..Other</h2>
        <i class="fas fa-cogs ic fa-lg"></i>
      </Link>
      <hr className="nav_hr"/>
      </div>
      <button className="btn tw_btn">Tweetle</button>
    </div>
  );
}

export default Navigation;
