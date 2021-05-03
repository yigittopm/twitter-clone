import "../styles/navigation.css";

function Navigation() {
  return (
    <div className="navigation">
      <i class="fab fa-twitter big"></i>
      <hr />
      <a href="#">
        <i class="fas fa-home"></i>
        <h2>Home</h2>
      </a>
      <a href="#">
        <h2>Discovery</h2>
      </a>
      <a href="#">
        <h2>Notification</h2>
      </a>
      <a href="#">
        <h2>Location</h2>
      </a>
      <a href="#">
        <h2>Lists</h2>
      </a>
      <a href="#">
        <h2>Profile</h2>
      </a>
      <a href="#">
        <h2>..Other</h2>
      </a>
      <button className="btn tw_btn">Tweetle</button>
    </div>
  );
}

export default Navigation;
