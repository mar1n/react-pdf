import React, { useRef } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const exampleHeaders = ["id", "name", "city", "gender"];

function createHeaders(keys) {
  var result = [];
  for (var i = 0; i < keys.length; i += 1) {
    result.push({
      id: keys[i],
      name: keys[i],
      prompt: keys[i],
      width: 65,
      align: "center",
      padding: 0,
    });
  }
  return result;
}

const data = ["1", "Szymon", "London", "Male"];

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
  const htmlToPdfRef = useRef(null);
  const makePdf = () => {
    console.log("make");
    const doc = new jsPDF();
    autoTable(doc, {
      margin: { top: 0, bottom: 0, left: 0, right: 0 },
      head: [exampleHeaders],
      body: [data],
    });
    //doc.text("Hi this is another line", 10, 10);
    let finalY = doc.lastAutoTable.finalY; // The y position on the page
    let finalX = doc.lastAutoTable.finalX;

    doc.fromHTML(
      htmlToPdfRef.current.children[11].outerHTML +
        htmlToPdfRef.current.children[12].outerHTML +
        htmlToPdfRef.current.children[13].outerHTML +
        htmlToPdfRef.current.children[14].outerHTML +
        htmlToPdfRef.current.children[15].outerHTML +
        htmlToPdfRef.current.children[16].outerHTML +
        htmlToPdfRef.current.children[17].outerHTML,
      finalX,
      finalY,
      {
        width: 170,
      },
      function (a) {
        doc.save("HTML2PDF.pdf");
      }
    );
    console.log("finalY", finalY);
    console.log("finalX", finalX);
    //console.log("doc.autoTable.previous", doc.autoTable.previous);
    doc.text(0, finalY + 10, "Hello!");
    doc.save();
  };

  return (
    <>
      <button onClick={makePdf}>cellPdf</button>
      <div id="htmlTopdf" ref={htmlToPdfRef} class="content-general-info">
        <div class="columns-merge">
          <h2>Project ID</h2>
          <div class="newline-text">
            <div>28</div>
          </div>
        </div>
        <div class="columns-merge">
          <h2>Job Title</h2>
          <div class="newline-text">
            <div>Service Engineer</div>
          </div>
        </div>
        <div class="columns-merge">
          <h2>Job Type</h2>
          <div class="newline-text">
            <div>full time</div>
          </div>
        </div>
        <div class="columns-merge">
          <h2>Employer</h2>
          <div class="newline-text">
            <div>Adlington welding Supplies Ltd</div>
          </div>
        </div>
        <div class="columns-merge">
          <h2>Location</h2>
          <div class="newline-text">
            <div>United Kingdom</div>
          </div>
        </div>
        <div class="columns-merge">
          <h2>Salary</h2>
          <div class="newline-text">
            <div>Unspecified</div>
          </div>
        </div>
        <div class="columns-merge">
          <h2>Distance</h2>
          <div class="newline-text">
            <div>remote unavailable</div>
          </div>
        </div>
        <div class="columns-merge">
          <h2>Currency</h2>
          <div class="newline-text">
            <div>GBP</div>
          </div>
        </div>
        <div class="columns-merge">
          <h2>Show Employer Name</h2>
          <div class="newline-text">Yes</div>
        </div>
        <div class="columns-merge">
          <h2>Start Date</h2>
          <div class="newline-text">
            <div>2021-04-22</div>
          </div>
        </div>
        <div class="columns-merge">
          <h2>Close Date</h2>
          <div class="newline-text">
            <div>2021-10-19</div>
          </div>
        </div>
        <div class="columns-merge">
          <h2>Organization Infomation</h2>
          <div class="newline-text">
            <div>
              We are a large independent hire company who specialise in the
              supply of welding equipment nationwide serviced from our 6
              regional offices in Falkirk Teesside Scunthorpe Luton Pembroke. No
              job is to small or to big and with over 32 fitters nationwide we
              will keep your site running with an average call out time of 2
              hours. Some of the major projects that we have supplied can be
              seen by visiting our web page @ www.adweld.co.uk
            </div>
          </div>
        </div>
        <div class="columns-merge">
          <h2>Professional Field</h2>
          <div class="newline-text">
            <div>
              Automotive Staffing &amp; Recruiting
              Transportation/Trucking/Railroad
            </div>
          </div>
        </div>
        <div class="columns-merge">
          <h2>Job Description</h2>
          <div class="newline-text">
            <div>
              Due to expansion and increased customer demand, we are currently
              recruiting for an experienced field service engineer with
              experience of diesel engines to carry out the servicing and repair
              of our generator and welding equipment. Are you the right
              candidate for this opportunity? Make sure to read the full
              description below. Our fleet of fast approaching 600no generators
              and 500no welding sets have an average age of 3 years old, and
              serve our customers on prestigious projects with the likes of.
            </div>
          </div>
        </div>
        <div class="columns-merge">
          <h2>Required Expertise</h2>
          <div class="newline-text">
            <div></div>
          </div>
        </div>
        <div class="columns-merge">
          <h2>Responsibility</h2>
          <div class="newline-text">
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit, risus ac tempor lacinia, lorem orci euismod risus, non tincidunt velit diam interdum diam. Pellentesque non massa nibh. Phasellus sed egestas orci. Sed tincidunt, ligula sit amet convallis scelerisque, velit eros scelerisque ipsum, ut hendrerit ipsum arcu eget enim. Mauris sollicitudin, leo vitae sollicitudin dignissim, quam augue viverra nibh, sed iaculis tellus felis efficitur turpis. Curabitur et dapibus dui. Mauris in maximus eros. Maecenas convallis ex massa, non finibus nulla finibus a.</div>
          </div>
        </div>
        <div class="columns-merge">
          <h2>Essential Skills</h2>
          <div class="newline-text">
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit, risus ac tempor lacinia, lorem orci euismod risus, non tincidunt velit diam interdum diam. Pellentesque non massa nibh. Phasellus sed egestas orci. Sed tincidunt, ligula sit amet convallis scelerisque, velit eros scelerisque ipsum, ut hendrerit ipsum arcu eget enim. Mauris sollicitudin, leo vitae sollicitudin dignissim, quam augue viverra nibh, sed iaculis tellus felis efficitur turpis. Curabitur et dapibus dui. Mauris in maximus eros. Maecenas convallis ex massa, non finibus nulla finibus a.</div>
          </div>
        </div>
        <div class="columns-merge">
          <h2>Category</h2>
          <div class="newline-text">
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cellpdf;

<div id="htmlTopdf" class="content-general-info">
  <div class="columns-merge">
    <h2>Expert ID</h2>
    <div class="newline-text">
      <div>345</div>
    </div>
  </div>
  <div class="columns-merge">
    <h2>Title</h2>
    <div class="newline-text">
      <div>Mr</div>
    </div>
  </div>
  <div class="columns-merge">
    <h2>First Name</h2>
    <div class="newline-text">
      <div>Szymon</div>
    </div>
  </div>
  <div class="columns-merge">
    <h2>Last Name</h2>
    <div class="newline-text">
      <div>Dawidowicz</div>
    </div>
  </div>
  <div class="columns-merge">
    <h2>Expertise</h2>
    <div class="newline-text">
      <div>dsdsddsf</div>
    </div>
  </div>
  <div class="columns-merge">
    <h2>Category</h2>
    <div class="newline-text">
      <div>Material Science</div>
    </div>
  </div>
  <div class="columns-merge">
    <h2>Nationality</h2>
    <div class="newline-text">
      <div>Albania</div>
    </div>
  </div>
  <div class="columns-merge">
    <h2>Email</h2>
    <div class="newline-text">
      <div>szym0nd4widowicz@gmail.com</div>
    </div>
  </div>
  <div class="columns-merge">
    <h2>Phone No</h2>
    <div class="newline-text">
      <div>07784701540</div>
    </div>
  </div>
  <div class="columns-merge">
    <h2>Education</h2>
    <div class="newline-text">
      <div></div>
    </div>
  </div>
  <div class="columns-merge">
    <h2>Employment</h2>
    <div class="newline-text">
      <div></div>
    </div>
  </div>
  <div class="columns-merge">
    <h2>Patents</h2>
    <div class="newline-text">
      <div></div>
    </div>
  </div>
  <div class="columns-merge">
    <h2>Publications</h2>
    <div class="newline-text">
      <div></div>
    </div>
  </div>
  <div class="columns-merge">
    <h2>Field of Speciality</h2>
    <div class="newline-text">
      <div></div>
    </div>
  </div>
  <div class="columns-merge">
    <h2>Awards</h2>
    <div class="newline-text">
      <div></div>
    </div>
  </div>
  <div class="columns-merge">
    <h2>Scientific Contribution And Research Leadership</h2>
    <div class="newline-text">
      <div></div>
    </div>
  </div>
  <div class="columns-merge">
    <h2>Collaborative Project Proposal</h2>
    <div class="newline-text">
      <div></div>
    </div>
  </div>
</div>;
