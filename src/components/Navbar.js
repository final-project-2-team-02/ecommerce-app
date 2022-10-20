import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <Link style={styles.navItem} to="/">
          Indonesia
        </Link>
        <Link style={styles.navItem} to="/programmming">
          Programming
        </Link>
        <Link style={styles.navItem} to="/covid-19">
          COVID-19
        </Link>
        <Link style={styles.navItem} to="/saved">
          Saved
        </Link>
      </nav>
      <div style={styles.search}>
        <SearchBar />
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "white",
    display: "flex",
    padding: "10px 0",
    borderTop: "1px solid grey",
    borderBottom: "5px double black",
    position: "sticky",
    top: 0,
  },
  nav: {
    display: "flex",
    flex: 1,
  },
  navItem: {
    padding: "0 5%",
    textDecoration: "none",
  },
  search: {
    flex: 1,
  },
};

export default Navbar;
