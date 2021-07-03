import React from "react";
import { jsPDF } from "jspdf";

const Pdf = () => {
    const makePdf = () => {
        const doc = new jsPDF();

        doc.text('Hi my first pdf', 10, 10);

        doc.save();
    };
    return(
        <button onClick={makePdf}>
            Pdf
        </button>
    );
};


export default Pdf;