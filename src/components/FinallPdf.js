import React from "react";
import _ from "lodash";
import { jsPDF } from "jspdf";

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
  responsibility: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit, risus ac tempor lacinia, lorem orci euismod risus, non tincidunt velit diam interdum diam. Pellentesque non massa nibh. Phasellus sed egestas orci. Sed tincidunt, ligula sit amet convallis scelerisque, velit eros scelerisque ipsum, ut hendrerit ipsum arcu eget enim. Mauris sollicitudin, leo vitae sollicitudin dignissim, quam augue viverra nibh, sed iaculis tellus felis efficitur turpis. Curabitur et dapibus dui. Mauris in maximus eros. Maecenas convallis ex massa, non finibus nulla finibus a.",
  essential_skills: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit, risus ac tempor lacinia, lorem orci euismod risus, non tincidunt velit diam interdum diam. Pellentesque non massa nibh. Phasellus sed egestas orci. Sed tincidunt, ligula sit amet convallis scelerisque, velit eros scelerisque ipsum, ut hendrerit ipsum arcu eget enim. Mauris sollicitudin, leo vitae sollicitudin dignissim, quam augue viverra nibh, sed iaculis tellus felis efficitur turpis. Curabitur et dapibus dui. Mauris in maximus eros. Maecenas convallis ex massa, non finibus nulla finibus a.",
  professional_field: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit, risus ac tempor lacinia, lorem orci euismod risus, non tincidunt velit diam interdum diam. Pellentesque non massa nibh. Phasellus sed egestas orci. Sed tincidunt, ligula sit amet convallis scelerisque, velit eros scelerisque ipsum, ut hendrerit ipsum arcu eget enim. Mauris sollicitudin, leo vitae sollicitudin dignissim, quam augue viverra nibh, sed iaculis tellus felis efficitur turpis. Curabitur et dapibus dui. Mauris in maximus eros. Maecenas convallis ex massa, non finibus nulla finibus a.",
  job_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit, risus ac tempor lacinia, lorem orci euismod risus, non tincidunt velit diam interdum diam. Pellentesque non massa nibh. Phasellus sed egestas orci. Sed tincidunt, ligula sit amet convallis scelerisque, velit eros scelerisque ipsum, ut hendrerit ipsum arcu eget enim. Mauris sollicitudin, leo vitae sollicitudin dignissim, quam augue viverra nibh, sed iaculis tellus felis efficitur turpis. Curabitur et dapibus dui. Mauris in maximus eros. Maecenas convallis ex massa, non finibus nulla finibus a.",
  required_expertise: "<p>required</p>",
  employer: "Amazon",
  location: "England",
  distance: "remote available",
  salary: "40,0000",
  currency: "GBP",
  category: "Business Management",
};

const FinallPdf = () => {
  const makePdf = () => {
    const doc = new jsPDF();
    const tableHeaders = _.dropRight(fields, 7);
    const tableValues = _.map(tableHeaders, (value) => {
      return data[value];
    });

    doc.autoTable({
      styles: { overflow: "linebreak" },
      margin: { top: 0, bottom: 0, left: 0, right: 0 },
      head: [smallSizeFields],
      body: [tableValues],
    });

    let lastHeightY = doc.lastAutoTable.finalY;
    const pageHeight = doc.internal.pageSize.height;
    const content = _.drop(fields, 11);
    _.forEach(content, (value) => {
      if (lastHeightY + 15 >= pageHeight) {
        lastHeightY = 0;
        doc.addPage();
      }
      doc.text(fieldTitle[value] + ": \n", 10, (lastHeightY += 10));
      let currentTextDimensions = doc.getTextDimensions(data[value]);
      if (currentTextDimensions.w >= 180) {
        const longText = doc.splitTextToSize(data[value], 180);
        _.forEach(longText, (value) => {
          if (lastHeightY + 15 >= pageHeight) {
            lastHeightY = 0;
            doc.addPage();
          }
          doc.text(value, 10, (lastHeightY += 5));
        });
        // doc.text(
        //   longText,
        //   10,
        //   (lastHeightY += 5)
        // );
        // lastHeightY += 10 + (longText.length * currentTextDimensions.h) + 10
      } else {
        doc.text(data[value], 10, (lastHeightY += 5));
      }
    });
    //doc.text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit, risus ac tempor lacinia, lorem orci euismod risus, non tincidunt velit diam interdum diam. Pellentesque non massa nibh. Phasellus sed egestas orci. Sed tincidunt, ligula sit amet convallis scelerisque, velit eros scelerisque ipsum, ut hendrerit ipsum arcu eget enim. Mauris sollicitudin, leo vitae sollicitudin dignissim, quam augue viverra nibh, sed iaculis tellus felis efficitur turpis. Curabitur et dapibus dui. Mauris in maximus eros. Maecenas convallis ex massa, non finibus nulla finibus a.", 10, lastHeightY + 10);

    doc.save();

    //console.log("fields lenght", fields.length);
    //console.log("tableArray", tableArray);
  };
  return (
    <div>
      <button onClick={makePdf}>FinallPdf</button>
    </div>
  );
};

export default FinallPdf;
