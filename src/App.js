import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pope" animal="bird" breed="Parrot" />
      <Pet name="Garfield" animal="cat" breed="Mixed" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
