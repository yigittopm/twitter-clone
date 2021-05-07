import "../styles/header.css";
import { useSelector} from "react-redux";

function Header() {

  const header = useSelector(state => state.header);

  return (
    <div className="header">
      <h2>{header}</h2>
      <hr />
    </div>
  );
}

export default Header;
