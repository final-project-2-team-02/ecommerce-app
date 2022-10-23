import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const NewsContainer = ({ data }) => {
  return (
    <Card style={styles.card}>
      <Card.Img variant="top" src={data.urlToImage} style={styles.img} />
      <Card.Body style={styles.content}>
        <div style={styles.text}>
          <Card.Text style={styles.source}>{data.source.name}</Card.Text>
          <Card.Title style={styles.title}>{data.title}</Card.Title>
          <Card.Text style={styles.desc}>{data.description}</Card.Text>
        </div>
        <div>
          <Button
            variant="dark"
            style={styles.btn}
            onClick={() =>
              window.open(`${data.url}`, "_blank", "noopener,noreferrer")
            }
          >
            News Page
          </Button>
          <Button variant="success" style={styles.btn}>
            Save
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

const styles = {
  card: {
    display: "flex",
    width: "30%",
    margin: "1%",
    textAlign: "left",
    borderRadius: 20,
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    fontFamily: "'Merriweather', serif",
  },
  img: {
    width: "90%",
    height: 300,
    margin: "5% 5% 0",
  },
  content: {
    display: "flex",
    flexDirection: "column",
  },
  text: {
    flex: 1,
  },
  source: {
    marginTop: 0,
    fontSize: 14,
    margin: "0 2%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: "2%",
  },
  desc: {
    margin: "2%",
  },
  btn: {
    width: "30%",
    bottom: 0,
    marginRight: 15,
    margin: "2%",
    fontFamily: "'Roboto', sans-serif",
  },
};

export default NewsContainer;
