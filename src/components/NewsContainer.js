import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const NewsContainer = ({ el }) => {
  return (
    <Card style={styles.card}>
      <Card.Img variant="top" src={el.urlToImage} style={styles.img} />
      <Card.Body>
        <Card.Text style={styles.source}>{el.source.name}</Card.Text>
        <Card.Title style={styles.title}>{el.title}</Card.Title>
        <Card.Text>{el.description}</Card.Text>
        <Button variant="primary" style={styles.btn}>Next Page</Button>
        <Button variant="primary" style={styles.btn}>Save</Button>
      </Card.Body>
    </Card>
  );
};

const styles = {
  card: {
    height: "100%",
    width: "30%",
    margin: "1%",
    border: "1px solid black",
    textAlign: "left",
  },
  img: {
    width: "100%",
    height: 300,
  },
  source: {
    marginTop: 0,
    fontSize: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  btn: {
    width: "20%",
    bottom: 0,
    marginRight: 15,
  }
};

export default NewsContainer;
