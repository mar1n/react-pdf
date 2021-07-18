import React, { useRef } from "react";
import jsPDF from "jspdf";

const Htmlpdf = () => {
  const htmlToPdfRef = useRef(null);

  const makePdf = () => {
    const doc = new jsPDF();
    //doc.text("Hello world!", 10, 10);
    console.log("document.body", document.body);
    console.log("jsPDF object", doc);
    doc.fromHTML(
      htmlToPdfRef.current.children[11].outerHTML +  htmlToPdfRef.current.children[12].outerHTML,
      15,
      15,
      {
        width: 170,
      },
      function (a) {
        doc.save("HTML2PDF.pdf");
      }
    );
    //doc.save("a4.pdf");
  };

  const HtmlToPdfRefClick = () => {
    console.log("ref", htmlToPdfRef);
    console.log("htmlRef", Object.getOwnPropertyNames( htmlToPdfRef));
    console.log("typof current", typeof htmlToPdfRef.current);
    console.log("string htmlToPdfRef", htmlToPdfRef.current.outerHTML);
    console.log("type outerHTML", typeof htmlToPdfRef.current.outerHTML);
    const htmlCollections = htmlToPdfRef.current.children;
    console.log('collections', [...htmlCollections]);
    console.log('select', htmlToPdfRef.current.children[11]);
    // const arr = Array.prototype.slice.call( domCollections );
    // console.log('domCollections', arr);
  };

  return (
    <>
      <button onClick={makePdf}>htmlPdf</button>
      <button onClick={HtmlToPdfRefClick}>htmlToPdfRef</button>
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
            <div></div>
          </div>
        </div>
        <div class="columns-merge">
          <h2>Essential Skills</h2>
          <div class="newline-text">
            <div></div>
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

export default Htmlpdf;
