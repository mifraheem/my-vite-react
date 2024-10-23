import React, { useRef } from 'react';
import PDFLayout from './components/PDFLayout';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


function App() {
  const pdfRef = useRef();

  const generatePDF = () => {
    const input = pdfRef.current;

    html2canvas(input, { scale: 1 }).then(canvas => {
      const imgData = canvas.toDataURL('image/jpeg', 2.5);
      const pdf = new jsPDF('p', 'mm', 'a4');

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const ratio = canvasWidth / canvasHeight;

      const pdfCanvasHeight = pdfWidth / ratio;

      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfCanvasHeight);
      pdf.save('generated_report.pdf');
    });
  };


  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="text-center mb-8">
        <button
          onClick={generatePDF}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Generate PDF
        </button>
      </div>

      {/* PDF Content */}
      <div ref={pdfRef} id="pdf-content">
        {<PDFLayout />}

      </div>
    </div>
  );
}

export default App;
