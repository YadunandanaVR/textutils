import "./App.css";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      {/* <Navbar/> */}
      <Navbar title="TextUtils" home="Home" about="About" />
      <div className="container">
        <TextForm heading="Enter the text to Analyese" />
      </div>
    </>
  );
}

export default App;
