import NewsContainer from "../components/NewsContainer";

const Indonesia = ({ data }) => {
  return (
    <div style={styles.container}>
      {data.map((el, i) => (
        <NewsContainer el={el} key={i}/>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
};

export default Indonesia;
