import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

const Header = () => {
  return (
    <header>
      <Link to="/">Fizza Co.</Link>
      <SearchOrder />

      <p>rezi karanadze</p>
    </header>
  );
};

export default Header;
