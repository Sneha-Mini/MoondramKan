import React, { useState, useEffect, useRef } from 'react';
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

function Flipbook({ pdf, width, height, responsiveWidth, responsiveHeight, smallWidth, smallHeight }) {
    const [numPages, setNumPages] = useState();
    const [currentPage, setCurrentPage] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const flipBook = useRef();

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

    let pageWidth, pageHeight;
    if (windowWidth <= 425) {
        pageWidth = smallWidth;
        pageHeight = smallHeight;
    } else if (windowWidth <= 768) {
        pageWidth = responsiveWidth;
        pageHeight = responsiveHeight;
    } else {
        pageWidth = width;
        pageHeight = height;
    }

    const goToPreviousPage = () => {
        if (flipBook.current) {
            flipBook.current.pageFlip().flipPrev();
            setCurrentPage(flipBook.current.pageFlip().getCurrentPageIndex() - 1);
        }
    };

    const goToNextPage = () => {
        if (flipBook.current) {
            flipBook.current.pageFlip().flipNext();
            setCurrentPage(flipBook.current.pageFlip().getCurrentPageIndex() + 1);
        }
    };

    const handleFlip = (e) => {
        setCurrentPage(e.data);
    };

    return (
        <div className='h-screen w-screen flex flex-col gap-5 justify-center items-center bg-gray-900 overflow-hidden relative'>
            {currentPage > 0 && (
                <button className="btn prev-btn" onClick={goToPreviousPage}>Previous</button>
            )}
            {numPages && currentPage < numPages - 1 && (
                <button className="btn next-btn" onClick={goToNextPage}>Next</button>
            )} {windowWidth > 768 && <><br /><br /><br /><br /></>}
            <HTMLFlipBook
                ref={flipBook}
                width={pageWidth}
                height={pageHeight}
                onFlip={handleFlip}
            >
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
            {currentPage > 0 && (
                <button className="btn prev-btn" onClick={goToPreviousPage}>Previous</button>
            )}
            {numPages && currentPage < numPages - 1 && (
                <button className="btn next-btn" onClick={goToNextPage}>Next</button>
            )}
            <style jsx>{`
                .btn {
                    background-color: #842B3C;
                    color: white;
                    padding: 10px 20px;
                    border: none;
                    cursor: pointer;
                    border-radius: 5px;
                    font-size: 16px;
                    transition: background-color 0.3s ease;
                    position: absolute;
                    margin-top: 30px;
                }
                
                .prev-btn {
                    left: 200px;
                }

                .next-btn {
                    right: 200px;
                }
                @media (max-width: 768px) {
                    .prev-btn {
                        left: 20px;
                    }
    
                    .next-btn {
                        right: 20px;
                    }
                    .btn {
                        margin-top: 0px;
                    }
                }
                
                @media (max-width: 480px) {
                    .prev-btn {
                        left: 20px;
                    }
                    .btn {
                        margin-top: 0px;
                    }
                    .next-btn {
                        right: 20px;
                    }
                }
                @media (max-width: 320px) {
                    .prev-btn {
                        left: 20px;
                    }
                    .btn {
                        margin-top: 0px;
                    }
                    .next-btn {
                        right: 20px;
                    }
                }
                
            `}</style>
        </div>
    );
}

Flipbook.propTypes = {
    pdf: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    responsiveWidth: PropTypes.number,
    responsiveHeight: PropTypes.number,
    smallWidth: PropTypes.number,
    smallHeight: PropTypes.number,
};

Flipbook.defaultProps = {
    width: 600,
    height: 870,
    responsiveWidth: 320,
    responsiveHeight: 435,
    smallWidth: 210,
    smallHeight: 290,
};

export default Flipbook;
