import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SearchBar = () => {
  return (
    <div style={styles.searchItem}>
      <Form.Control style={styles.form} placeholder="Search ..." />
      <Button style={styles.button} variant="secondary" type="submit">
        Search
      </Button>
    </div>
  );
};

const styles = {
  searchItem: {
    display: "flex",
    marginLeft: "25%",
  },
  form: {
    marginRight: 5,
  },
  button: {
    width: "35%",
    marginRight: "10%",
  },
};

export default SearchBar;
