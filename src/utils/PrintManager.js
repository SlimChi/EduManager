import React from 'react';
import {useReactToPrint} from 'react-to-print';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import {FaFilePdf, FaPrint} from 'react-icons/fa';

const PrintManager = ({
                          contentRef,
                          activityName,
                          pageCount,
                          quality = 'hd',
                      }) => {
    const exportToPDF = async () => {
        document.body.classList.add('printing');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pages = contentRef.current.querySelectorAll('.print-page');

        for (let i = 0; i < pages.length; i++) {
            const page = pages[i];

            // Temporarily adjust page styling for capture
            page.style.display = 'block';
            page.style.visibility = 'visible';
            page.style.height = 'auto';
            page.style.overflow = 'visible';

            await new Promise((resolve) => setTimeout(resolve, 300)); // Allow for rendering

            const canvas = await html2canvas(page, {
                scale: quality === '4k' ? 4 : quality === 'hd' ? 2 : 1.5,
                useCORS: true,
                logging: false,
                allowTaint: true,
                letterRendering: true,
                scrollX: 0,
                scrollY: -window.scrollY,
                windowWidth: document.documentElement.scrollWidth,
                windowHeight: document.documentElement.scrollHeight,
                ignoreElements: (element) => {
                    return (
                        element.classList.contains('no-print') ||
                        element.tagName.toLowerCase() === 'button'
                    );
                },
            });

            const imgData = canvas.toDataURL('image/png');
            const pdfWidth = pdf.internal.pageSize.getWidth() - 20;
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

            // Center vertically if content is shorter than page

            const yPos = 2;

            pdf.addImage(imgData, 'PNG', 10, yPos, pdfWidth, pdfHeight);

            if (i < pages.length - 1) {
                pdf.addPage();
            }
        }

        document.body.classList.remove('printing');
        pdf.save(`${activityName}_${new Date().toISOString().slice(0, 10)}.pdf`);
    };

    return (
        <div className="print-actions no-print">
            <button onClick={exportToPDF} className="print-btn pdf-btn no-print">
                <FaFilePdf/> PDF HD
            </button>
        </div>
    );
};

export default PrintManager;
