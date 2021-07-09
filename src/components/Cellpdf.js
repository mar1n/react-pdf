import React from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

const exampleHeaders = [
    "id",
    "name",
    "city",
    "gender"
];

function createHeaders(keys) {
    var result = [];
    for (var i = 0; i < keys.length; i += 1) {
      result.push({
        id: keys[i],
        name: keys[i],
        prompt: keys[i],
        width: 65,
        align: "center",
        padding: 0
      });
    }
    return result;
  }

const data = [
    "1", "Szymon", "London", "Male"
];

// var generateData = function(amount) {
//     var result = [];
//     var data = {
//       coin: "100",
//       game_group: "GameGroup",
//       game_name: "XPTO2",
//       game_version: "25",
//       machine: "20485861",
//       vlt: "0"
//     };
//     for (var i = 0; i < amount; i += 1) {
//       data.id = (i + 1).toString();
//       result.push(Object.assign({}, data));
//     }
//     console.log('generate data', result);
//     return result;
//   };
  
//   function createHeaders(keys) {
//     var result = [];
//     for (var i = 0; i < keys.length; i += 1) {
//       result.push({
//         id: keys[i],
//         name: keys[i],
//         prompt: keys[i],
//         width: 65,
//         align: "center",
//         padding: 0
//       });
//     }
//     return result;
//   }
  
//   var headers = createHeaders([
//     "id",
//     "coin",
//     "game_group",
//     "game_name",
//     "game_version",
//     "machine",
//     "vlt"
//   ]);


const Cellpdf = () => {
    const makePdf = () => {
        console.log('make')
        const doc = new jsPDF('p','pt', 'a4');
        doc.autoTable({
            margin: { top: 0, bottom: 0, left: 0, right: 0 },
            head: [exampleHeaders],
            body: [
              data
            ],
          });
        //doc.text("Hi this is another line", 10, 10);
        let finalY = doc.lastAutoTable.finalY; // The y position on the page
        let finalX = doc.lastAutoTable.finalX;

        console.log('finalY', finalY);
        console.log('finalX', finalX);
        console.log('doc.autoTable.previous', doc.autoTable.previous);
        doc.text(0, finalY + 10, "Hello!");
        doc.save();
      };
    
      return (
          <button onClick={makePdf}>
              cellPdf
          </button>
      )
}

export default Cellpdf;