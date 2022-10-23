import NewsContainer from "../components/NewsContainer";
import { useIndonesia } from "../hooks/Indonesia.hook.js";

const Indonesia = () => {
  const { dataIndonesia, loadingIndonesia, errorIndonesia } = useIndonesia();

  return (
    <div style={styles.container}>
      {loadingIndonesia && <div style={{fontSize: "30px"}}>A moment please...</div>}
      {errorIndonesia && (<div>{`There is a problem fetching the post data - ${errorIndonesia}`}</div>)}
      {dataIndonesia.map((data, i) => (
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
