import NewsContainer from "../components/NewsContainer";
import { useProgramming } from "../hooks/Programming.hook";

const Programming = () => {
  const { dataProgamming, loadingProgamming, errorProgramming } = useProgramming();

  return (
    <div style={styles.container}>
      {loadingProgamming && <div style={{fontSize: "30px"}}>A moment please...</div>}
      {errorProgramming && (<div>{`There is a problem fetching the post data - ${errorProgramming}`}</div>)}
      {dataProgamming.map((data, i) => (
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

export default Programming;
