import React, { useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page, pdfjs } from 'react-pdf';
import PropTypes from 'prop-types';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Pages = React.forwardRef((props, ref) => {
    return (
        <div className="pdf-page" ref={ref}>
            {props.children}
        </div>
    );
});

Pages.displayName = 'Pages';

function Flipbook({ pdf, width, height, responsiveWidth, responsiveHeight }) {
    const [numPages, setNumPages] = useState();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth <= 768;
    const pageWidth = isMobile ? responsiveWidth : width;
    const pageHeight = isMobile ? responsiveHeight : height;

    return (
        <div className='h-screen w-screen flex flex-col gap-5 justify-center items-center bg-gray-900 overflow-hidden'>
            <HTMLFlipBook width={pageWidth} height={pageHeight}>
                {[...Array(numPages).keys()].map((pNum) => (
                    <Pages key={pNum} number={pNum + 1}>
                        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                            <Page
                                pageNumber={pNum + 1}
                                width={pageWidth}
                                renderAnnotationLayer={false}
                                renderTextLayer={false}
                                className="pdf-page"
                            />
                        </Document>
                    </Pages>
                ))}
            </HTMLFlipBook>
        </div>
    );
}

Flipbook.propTypes = {
    pdf: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    responsiveWidth: PropTypes.number,
    responsiveHeight: PropTypes.number,
};

Flipbook.defaultProps = {
    width: 600,
    height: 870,
    responsiveWidth: 300,
    responsiveHeight: 435,
};

export default Flipbook;
