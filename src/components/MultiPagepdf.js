import React from "react";
import { jsPDF } from "jspdf";
import _ from "lodash";

const data = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit, risus ac tempor lacinia, lorem orci euismod risus, non tincidunt velit diam interdum diam. Pellentesque non massa nibh. Phasellus sed egestas orci. Sed tincidunt, ligula sit amet convallis scelerisque, velit eros scelerisque ipsum, ut hendrerit ipsum arcu eget enim. Mauris sollicitudin, leo vitae sollicitudin dignissim, quam augue viverra nibh, sed iaculis tellus felis efficitur turpis. Curabitur et dapibus dui. Mauris in maximus eros. Maecenas convallis ex massa, non finibus nulla finibus a.",
  "Szymon2",
  "Szymon3",
  "Szymon4",
  "Szymon5",
  "Szymon6",
  "Szymon7",
  "Szymon8",
  "Szymon9",
  "Szymon10",
  "Szymon11",
  "Szymon12",
  "Szymon13",
  "Szymon14",
  "Szymon15",
  "Szymon16",
  "Szymon17",
  "Szymon18",
  "Szymon19",
  "Szymon20",
  "Szymon21",
  "Szymon22",
  "Szymon23",
  "Szymon24",
  "Szymon25",
  "Szymon26",
  "Szymon27",
  "Szymon28",
  "Szymon29",
  "Szymon30",
  "Szymon31",
  "Szymon32",
  "Szymon33",
];

const MultiPagepdf = () => {
  const makePdf = () => {
    const doc = new jsPDF();
    const pageHeight = doc.internal.pageSize.height;
    const pageWidth = doc.internal.pageSize.width;
    console.log('pageWidth', pageWidth);
    const strArr = doc.splitTextToSize(data[0], 180);
    doc.text(strArr, 10, 10);
    doc.save();
    console.log('strArr', strArr);
    // let y = 0;
    // _.forEach(data, (value) => {
    //   if (y + 10 >= pageHeight) {
    //     console.log("log last y height", y);
    //     y = 0;
    //     doc.addPage();
    //   }
    //   doc.text(10, (y += 10), value);
    //   console.log("y", y);
    //   console.log("value", value);
    // });
    // console.log("pageHeight", pageHeight);
    // doc.save();
  };
  return (
    <div>
      <button onClick={makePdf}>MultiPagePdf</button>
    </div>
  );
};

export default MultiPagepdf;
