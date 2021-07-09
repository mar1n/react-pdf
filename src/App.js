import "./App.css";
import Pdf from "./components/Pdf";
import Htmlpdf from "./components/Htmlpdf";
import Cellpdf from "./components/Cellpdf";

function App() {
  return (
    <>
      <p><strong>Hi!</strong>Szymon</p>
      <Pdf />
      <Htmlpdf />
      <Cellpdf/>
    </>
  );
}

export default App;
