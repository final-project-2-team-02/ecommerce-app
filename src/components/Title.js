import bg from "../utils/assets/background.jpg";

const Title = () => {
  return (
    <h1 style={styles.title}>News API Team 3</h1>
  );
};

const styles = {
  title: {
    backgroundImage: `url(${bg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    fontFamily: "'Gabriela', serif",
    fontSize: 50,
    fontWeight: "bold",
    padding: "1%",
    margin: 0,
  }
}

export default Title;
