import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const NewsContainer = ({ data }) => {
  return (
    <Card style={styles.card}>
      <Card.Img variant="top" src={data.urlToImage} style={styles.img} />
      <Card.Body>
        <Card.Text style={styles.source}>{data.source.name}</Card.Text>
        <Card.Title style={styles.title}>{data.title}</Card.Title>
        <Card.Text style={styles.desc}>{data.description}</Card.Text>
        <Button variant="primary" style={styles.btn}>
          Next Page
        </Button>
        <Button variant="primary" style={styles.btn}>
          Save
        </Button>
      </Card.Body>
    </Card>
  );
};

const styles = {
  card: {
    height: "100%",
    width: "30%",
    margin: "1%",
    textAlign: "left",
    borderRadius: 20,
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  },
  img: {
    width: "90%",
    height: 300,
    margin: "5% 5% 0",
  },
  source: {
    marginTop: 0,
    fontSize: 14,
    margin: "0 5%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: "3% 5% 3%",
  },
  desc: {
    margin: "0 5% 3%",
  },
  btn: {
    width: "20%",
    bottom: 0,
    marginRight: 15,
    margin: "5%",
  },
};

export default NewsContainer;
