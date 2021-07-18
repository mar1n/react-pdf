import React, { useRef } from "react";
import _ from "lodash";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const fieldTitle = {
  project_id: "Project ID",
  job_title: "Job Title",
  job_type: "Job Type",
  employer: "Employer",
  location: "Location",
  salary: "Salary",
  distance: "Distance",
  currency: "Currency",
  show_employer_name: "Show Employer Name",
  start_date: "Start Date",
  close_date: "Close Date",
  organization_info: "Organization Infomation",
  professional_field: "Professional Field",
  job_description: "Job Description",
  required_expertise: "Required Expertise",
  responsibility: "Responsibility",
  essential_skills: "Essential Skills",
  category: "Category",
};

const fields = [
  "project_id",
  "job_title",
  "job_type",
  "employer",
  "location",
  "salary",
  "distance",
  "currency",
  "show_employer_name",
  "start_date",
  "close_date",
  "organization_info",
  "professional_field",
  "job_description",
  "required_expertise",
  "responsibility",
  "essential_skills",
  "category",
];

const smallSizeFields = [
  "Id",
  "Job Title",
  "Job Type",
  "Employer",
  "Location",
  "Salary",
  "Distance",
  "Currency",
  "Show Employer",
  "Start",
  "Close",
];

const data = {
  project_id: 54,
  start_date: "2021-06-24",
  close_date: "2021-06-25",
  job_title: "Accountant Manger",
  job_type: "full time",
  organization_info:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit, risus ac tempor lacinia, lorem orci euismod risus, non tincidunt velit diam interdum diam. Pellentesque non massa nibh. Phasellus sed egestas orci. Sed tincidunt, ligula sit amet convallis scelerisque, velit eros scelerisque ipsum, ut hendrerit ipsum arcu eget enim. Mauris sollicitudin, leo vitae sollicitudin dignissim, quam augue viverra nibh, sed iaculis tellus felis efficitur turpis. Curabitur et dapibus dui. Mauris in maximus eros. Maecenas convallis ex massa, non finibus nulla finibus a.",
  show_employer_name: "Y",
  featured: null,
  responsibility:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit, risus ac tempor lacinia, lorem orci euismod risus, non tincidunt velit diam interdum diam. Pellentesque non massa nibh. Phasellus sed egestas orci. Sed tincidunt, ligula sit amet convallis scelerisque, velit eros scelerisque ipsum, ut hendrerit ipsum arcu eget enim. Mauris sollicitudin, leo vitae sollicitudin dignissim, quam augue viverra nibh, sed iaculis tellus felis efficitur turpis. Curabitur et dapibus dui. Mauris in maximus eros. Maecenas convallis ex massa, non finibus nulla finibus a.",
  essential_skills:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit, risus ac tempor lacinia, lorem orci euismod risus, non tincidunt velit diam interdum diam. Pellentesque non massa nibh. Phasellus sed egestas orci. Sed tincidunt, ligula sit amet convallis scelerisque, velit eros scelerisque ipsum, ut hendrerit ipsum arcu eget enim. Mauris sollicitudin, leo vitae sollicitudin dignissim, quam augue viverra nibh, sed iaculis tellus felis efficitur turpis. Curabitur et dapibus dui. Mauris in maximus eros. Maecenas convallis ex massa, non finibus nulla finibus a.",
  professional_field:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit, risus ac tempor lacinia, lorem orci euismod risus, non tincidunt velit diam interdum diam. Pellentesque non massa nibh. Phasellus sed egestas orci. Sed tincidunt, ligula sit amet convallis scelerisque, velit eros scelerisque ipsum, ut hendrerit ipsum arcu eget enim. Mauris sollicitudin, leo vitae sollicitudin dignissim, quam augue viverra nibh, sed iaculis tellus felis efficitur turpis. Curabitur et dapibus dui. Mauris in maximus eros. Maecenas convallis ex massa, non finibus nulla finibus a.",
  job_description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit, risus ac tempor lacinia, lorem orci euismod risus, non tincidunt velit diam interdum diam. Pellentesque non massa nibh. Phasellus sed egestas orci. Sed tincidunt, ligula sit amet convallis scelerisque, velit eros scelerisque ipsum, ut hendrerit ipsum arcu eget enim. Mauris sollicitudin, leo vitae sollicitudin dignissim, quam augue viverra nibh, sed iaculis tellus felis efficitur turpis. Curabitur et dapibus dui. Mauris in maximus eros. Maecenas convallis ex massa, non finibus nulla finibus a.",
  required_expertise: "<p>required</p>",
  employer: "Amazon",
  location: "England",
  distance: "remote available",
  salary: "40,0000",
  currency: "GBP",
  category: "Business Management",
};

const FinallPdf = () => {
  const htmlToPdfRef = useRef(null);
  const makePdf = () => {
    const doc = new jsPDF();
    const tableHeaders = _.dropRight(fields, 7);
    const tableValues = _.map(tableHeaders, (value) => {
      return data[value];
    });
    let finalY = doc.lastAutoTable.finalY; // The y position on the page
    let finalX = doc.lastAutoTable.finalX;

    autoTable(doc, {
      theme: 'grid',
      styles: { overflow: "linebreak", textColor: [0,0,0] },
      margin: { top: 0, bottom: 0, left: 0, right: 0 },
      columnStyles: {  halign: 'center'  },
      head: [smallSizeFields],
      body: [tableValues],
      didParseCell: function(hookData) {
        console.log('hookData', hookData);
        if (hookData.cell.raw === 'Id' || hookData.cell.raw === 'Salary' || hookData.cell.raw === 'Location' || hookData.cell.raw === 'Job Title' || hookData.cell.raw === 'Job Type' || hookData.cell.raw === 'Employer' ) {
          console.log('id');
          hookData.cell.styles.fillColor = [220, 220, 220];
        } else if(hookData.cell.raw === 'Show Employer' || hookData.cell.raw === 'Close' || hookData.cell.raw === 'Start' || hookData.cell.raw === 'Distance' || hookData.cell.raw === 'Currency' ) {
          hookData.cell.styles.fillColor = [248, 248, 255];
        } else {
          hookData.cell.styles.fillColor = [255, 255, 255];
        }
      }
    });

    doc.fromHTML(
      htmlToPdfRef.current.children[11].outerHTML,
      finalX,
      20,
      {
        width: 170,
      },
      function (a) {
        doc.save("HTML2PDF.pdf");
      }
    );
    doc.fromHTML(
      htmlToPdfRef.current.children[12].outerHTML,
      finalX,
      20,
      {
        width: 170,
      },
      function (a) {
        doc.save("HTML2PDF.pdf");
      }
    );

    // let lastHeightY = doc.lastAutoTable.finalY;
    // const pageHeight = doc.internal.pageSize.height;
    // const content = _.drop(fields, 11);
    // _.forEach(content, (value) => {
    //   if (lastHeightY + 15 >= pageHeight) {
    //     lastHeightY = 0;
    //     doc.addPage();
    //   }
    //   doc.text(fieldTitle[value] + ": \n", 10, (lastHeightY += 10));
    //   let currentTextDimensions = doc.getTextDimensions(data[value]);
    //   if (currentTextDimensions.w >= 180) {
    //     const longText = doc.splitTextToSize(data[value], 180);
    //     _.forEach(longText, (value) => {
    //       if (lastHeightY + 15 >= pageHeight) {
    //         lastHeightY = 0;
    //         doc.addPage();
    //       }
    //       doc.text(value, 10, (lastHeightY += 5));
    //     });
    // doc.text(
    //   longText,
    //   10,
    //   (lastHeightY += 5)
    // );
    // lastHeightY += 10 + (longText.length * currentTextDimensions.h) + 10
    //   } else {
    //     doc.text(data[value], 10, (lastHeightY += 5));
    //   }
    // });
    //doc.text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit, risus ac tempor lacinia, lorem orci euismod risus, non tincidunt velit diam interdum diam. Pellentesque non massa nibh. Phasellus sed egestas orci. Sed tincidunt, ligula sit amet convallis scelerisque, velit eros scelerisque ipsum, ut hendrerit ipsum arcu eget enim. Mauris sollicitudin, leo vitae sollicitudin dignissim, quam augue viverra nibh, sed iaculis tellus felis efficitur turpis. Curabitur et dapibus dui. Mauris in maximus eros. Maecenas convallis ex massa, non finibus nulla finibus a.", 10, lastHeightY + 10);

    doc.save();

    //console.log("fields lenght", fields.length);
    //console.log("tableArray", tableArray);
  };
  return (
    <div>
      <button onClick={makePdf}>FinallPdf</button>
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
              <strong>We are a large independent hire</strong> company who
              specialise in the supply of welding equipment nationwide serviced
              from our 6 regional offices in Falkirk Teesside Scunthorpe Luton
              Pembroke. No job is to small or to big and with over 32 fitters
              nationwide we will keep your site running with an average call out
              time of 2 hours. Some of the major projects that we have supplied
              can be seen by visiting our web page @ www.adweld.co.uk
            </div>
          </div>
        </div>
        <div class="columns-merge">
          <h2>Professional Field</h2>
          <div class="newline-text">
            <div>
              <ul>
                <li>sss</li>
                <li>sss</li>
              </ul>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              suscipit, risus ac tempor lacinia, lorem orci euismod risus, non
              tincidunt velit diam interdum diam. Pellentesque non massa nibh.
              Phasellus sed egestas orci. Sed tincidunt, ligula sit amet
              convallis scelerisque, velit eros scelerisque ipsum, ut hendrerit
              ipsum arcu eget enim. Mauris sollicitudin, leo vitae sollicitudin
              dignissim, quam augue viverra nibh, sed iaculis tellus felis
              efficitur turpis. Curabitur et dapibus dui. Mauris in maximus
              eros. Maecenas convallis ex massa, non finibus nulla finibus a.
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
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              suscipit, risus ac tempor lacinia, lorem orci euismod risus, non
              tincidunt velit diam interdum diam. Pellentesque non massa nibh.
              Phasellus sed egestas orci. Sed tincidunt, ligula sit amet
              convallis scelerisque, velit eros scelerisque ipsum, ut hendrerit
              ipsum arcu eget enim. Mauris sollicitudin, leo vitae sollicitudin
              dignissim, quam augue viverra nibh, sed iaculis tellus felis
              efficitur turpis. Curabitur et dapibus dui. Mauris in maximus
              eros. Maecenas convallis ex massa, non finibus nulla finibus a.
            </div>
          </div>
        </div>
        <div class="columns-merge">
          <h2>Responsibility</h2>
          <div class="newline-text">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              suscipit, risus ac tempor lacinia, lorem orci euismod risus, non
              tincidunt velit diam interdum diam. Pellentesque non massa nibh.
              Phasellus sed egestas orci. Sed tincidunt, ligula sit amet
              convallis scelerisque, velit eros scelerisque ipsum, ut hendrerit
              ipsum arcu eget enim. Mauris sollicitudin, leo vitae sollicitudin
              dignissim, quam augue viverra nibh, sed iaculis tellus felis
              efficitur turpis. Curabitur et dapibus dui. Mauris in maximus
              eros. Maecenas convallis ex massa, non finibus nulla finibus a.
            </div>
          </div>
        </div>
        <div class="columns-merge">
          <h2>Essential Skills</h2>
          <div class="newline-text">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              suscipit, risus ac tempor lacinia, lorem orci euismod risus, non
              tincidunt velit diam interdum diam. Pellentesque non massa nibh.
              Phasellus sed egestas orci. Sed tincidunt, ligula sit amet
              convallis scelerisque, velit eros scelerisque ipsum, ut hendrerit
              ipsum arcu eget enim. Mauris sollicitudin, leo vitae sollicitudin
              dignissim, quam augue viverra nibh, sed iaculis tellus felis
              efficitur turpis. Curabitur et dapibus dui. Mauris in maximus
              eros. Maecenas convallis ex massa, non finibus nulla finibus a.
            </div>
          </div>
        </div>
        <div class="columns-merge">
          <h2>Category</h2>
          <div class="newline-text">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              suscipit, risus ac tempor lacinia, lorem orci euismod risus, non
              tincidunt velit diam interdum diam. Pellentesque non massa nibh.
              Phasellus sed egestas orci. Sed tincidunt, ligula sit amet
              convallis scelerisque, velit eros scelerisque ipsum, ut hendrerit
              ipsum arcu eget enim. Mauris sollicitudin, leo vitae sollicitudin
              dignissim, quam augue viverra nibh, sed iaculis tellus felis
              efficitur turpis. Curabitur et dapibus dui. Mauris in maximus
              eros. Maecenas convallis ex massa, non finibus nulla finibus a.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinallPdf;
