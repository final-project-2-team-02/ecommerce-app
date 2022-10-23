import NewsContainer from "../components/NewsContainer";
import { useCovid19 } from "../hooks/Covid-19.hook";

const Covid19 = () => {
  const { dataCovid19, loadingCovid19, errorCovid19 } = useCovid19();

  return (
    <div style={styles.container}>
      {loadingCovid19 && <div style={{fontSize: "30px"}}>A moment please...</div>}
      {errorCovid19 && (<div>{`There is a problem fetching the post data - ${errorCovid19}`}</div>)}
      {dataCovid19.map((data, i) => (
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
