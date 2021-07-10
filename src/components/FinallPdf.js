import React from "react";
import _ from "lodash";
import { jsPDF } from "jspdf";

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
    "Close"
]

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

const FinallPdf = () => {
  const makePdf = () => {
    const doc = new jsPDF();
    const tableHeaders = _.dropRight(fields, 7);
    const tableValues = _.map(tableHeaders, (value) => {
      console.log("value", value);
      console.log("data[value]", data[value]);
      return data[value];
    });
    console.log("tableValues", tableValues);
    doc.autoTable({
      styles: { overflow:'linebreak'},
      margin: { top: 0, bottom: 0, left: 0, right: 0 },
      head: [smallSizeFields],
      body: [tableValues],
    });

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
