import React from "react";
import { jsPDF } from "jspdf";
import _ from "lodash";
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
    "category"
]

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
    category: "Category"
}

const data = {
  project_id: 54,
  start_date: "2021-06-24",
  close_date: "2021-06-25",
  job_title: "Accountant Manger",
  job_type: "full time",
  organization_info: "<p>Organization info</p>",
  show_employer_name: "Y",
  featured: null,
  responsibility: "<p>responsibilities</p>",
  essential_skills: "<p>essential</p>",
  professional_field: "<p>professinal field</p>",
  job_description: "<p>job description</p>",
  required_expertise: "<p>required</p>",
  employer: "Amazon",
  location: "England",
  distance: "remote available",
  salary: "40,0000",
  currency: "GBP",
  category: "Business Management",
};


const Pdf = () => {
  const makePdf = () => {
    const pdf = new jsPDF("p", "in", "letter");
    const pageHeight = pdf.internal.pageSize.height;
    const margin = 0.5;
    const size = 12;
    let curLines = [];
    let lastLine = pdf.splitTextToSize("", 7.5);
    let longStr = "";
    let verticalOffset = margin;

    let contents = [];
    

    _.forEach(fields, (key, index) => {
      contents.push(fieldTitle[key] + ": \n" + data[key] || "");

      longStr = contents.join("\n\n");

      curLines = pdf.splitTextToSize(longStr, 7.5);
      verticalOffset = verticalOffset + ((curLines.length + 0.5) * size) / 72;

      if (verticalOffset > pageHeight) {
        if (index === fields.length - 1) {
          pdf.text(0.5, margin + size / 72, curLines);
        } else {
          pdf.text(0.5, margin + size / 72, lastLine);

          pdf.addPage();
          verticalOffset = margin; // Restart height position
          contents = [fieldTitle[key] + ": \n" + data[key] || ""];
        }
      } else {
        if (index === fields.length - 1) {
          pdf.text(0.5, margin + size / 72, curLines);
        } else {
          lastLine = curLines;
        }
      }
    });

    const fileName = data[fields[2]] + " " + data[fields[3]] + ".pdf";
    pdf.save(fileName);
  };
  return <button onClick={makePdf}>Pdf</button>;
};

export default Pdf;
