import NewsContainer from "../components/NewsContainer";

const Indonesia = ({ datas }) => {
  return (
    <div style={styles.container}>
      {datas.map((data, i) => (
        <NewsContainer data={data} key={i}/>
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
