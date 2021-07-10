import "./App.css";
import Pdf from "./components/Pdf";
import Htmlpdf from "./components/Htmlpdf";
import Cellpdf from "./components/Cellpdf";
import MultiPagepdf from "./components/MultiPagepdf";
import FinallPdf from "./components/FinallPdf";

function App() {
  return (
    <>
      <p><strong>Hi!</strong>Szymon</p>
      <Pdf />
      <Htmlpdf />
      <Cellpdf/>
      <MultiPagepdf/>
      <FinallPdf/>
    </>
  );
}

export default App;
