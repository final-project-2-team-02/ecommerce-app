import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SearchBar = () => {
  return (
    <div style={styles.searchItem}>
      <Form>
        <Form.Control style={styles.form} type="email" placeholder="Search ..." />
        <Button style={styles.button} variant="primary" type="submit">
          Search
        </Button>
      </Form>
    </div>
  );
};

const styles = {
  searchItem: {
    marginLeft: '50%',
  },
  form: {
    marginRight: 5,
  },
  button: {
    marginRight: '5%',
  }
}

export default SearchBar;
