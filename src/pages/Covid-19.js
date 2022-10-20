import NewsContainer from "../components/NewsContainer";

const Covid19 = ({ datas }) => {
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

export default Covid19;
