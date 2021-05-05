import { useSelector} from "react-redux";

function Header() {

  const header = useSelector(state => state.header);

  return (
    <div>
      <h2>{header}</h2>
      <hr />
    </div>
  );
}

export default Header;
