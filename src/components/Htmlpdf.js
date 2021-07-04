import React from "react";
import { jsPDF } from "jspdf";

const Htmlpdf = () => {
  const makePdf = () => {
    const doc = new jsPDF("p", "pt", "a4");
    //doc.text("Hello world!", 10, 10);
    console.log('document.body', document.body);
    doc.html('<div><p><strong>Hi!</strong>Szymon</p></div>', {
        callback: function (doc) {
          doc.save();
        }
     });
    //doc.save("a4.pdf");
  };

  return (
      <button onClick={makePdf}>
          htmlPdf
      </button>
  )
};

export default Htmlpdf;
