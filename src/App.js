import "./App.css";
import LargeCard from "./component/LargeCard";
import SmallCard from "./component/SmallCard";

function App(props) {
  return (
    <>
      <LargeCard
        heading="Amazon Web Service(AWS) Hosted"
        para="We make your institution to compute on one of the worlds fast and powerful servers."
      />
      <SmallCard heading="Amazon Web Service(AWS) Hosted" />
    </>
  );
}

export default App;
